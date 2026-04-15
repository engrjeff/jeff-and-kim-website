/* eslint-disable @next/next/no-img-element */
'use client';

import { useConvex } from 'convex/react';
import { GuestList } from './guest-list';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useState, type FormEvent } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';

const SEAT_TABLE_MAP = {
  'Table 1': '/assets/seat/1.gif',
  'Table 2': '/assets/seat/2.gif',
  'Table 3': '/assets/seat/3.gif',
  'Table 4': '/assets/seat/4.gif',
  'Table 5': '/assets/seat/5.gif',
  'Table 6': '/assets/seat/6.gif',
  'Table 7': '/assets/seat/7.gif',
  'Table 8': '/assets/seat/8.gif',
  'Table 9': '/assets/seat/9.gif',
  'Table 10': '/assets/seat/10.gif',
  'VIP Table 1': '/assets/seat/VIP 1.gif',
  'VIP Table 2': '/assets/seat/VIP 2.gif',
};

export function FindMySeatForm() {
  const convex = useConvex();
  const router = useRouter();
  const [guestName, setGuestName] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle');

  const isPending = status === 'pending';
  const isSuccess = status === 'success';

  const seatImageSrc =
    SEAT_TABLE_MAP[tableNumber as keyof typeof SEAT_TABLE_MAP] ?? '';

  async function handleConfirmRSVP(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      setStatus('pending');

      const formData = new FormData(event.currentTarget);

      const guestId = formData.get('guestId') as Id<'guests'>;

      if (!guestId) return;

      const foundGuest = await convex.query(api.guests.getById, {
        id: guestId,
      });

      if (!foundGuest) {
        setStatus('idle');
        return;
      }

      setGuestName(foundGuest.name);
      setTableNumber(foundGuest.tableNumber || 'TBD');
      setStatus('success');
    } catch (error) {
      console.log(error);
      setStatus('idle');
    }
  }

  return (
    <>
      <form onSubmit={handleConfirmRSVP}>
        <fieldset disabled={isPending} className="space-y-4">
          <GuestList />
          <Button type="submit" size="cta" className="font-elegant w-full">
            {isPending && <Spinner data-icon="inline-start" />}{' '}
            {isPending ? 'Please wait...' : 'Find My Seat'}
          </Button>
        </fieldset>
      </form>
      <AlertDialog
        open={isSuccess}
        onOpenChange={(isOpen) => {
          if (isOpen) {
            setStatus('success');
          } else {
            setStatus('idle');
          }
        }}
      >
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-transparent">
              <img
                src="/assets/monogram-v2-on-white.svg"
                alt="Kim and Jeff"
                className="object-contain size-10"
              />
            </AlertDialogMedia>
            <AlertDialogTitle>Hi {guestName}!</AlertDialogTitle>
            <AlertDialogDescription>
              We are delighted to be with you on our wedding day!
              <br />
              You will find your seat here <br />
              <span className="font-bold text-xl mt-2 block mb-4">
                {tableNumber}
              </span>
              {seatImageSrc && (
                <img
                  src={seatImageSrc}
                  alt=""
                  width="100%"
                  className="h-85 w-full object-contain"
                />
              )}
              <br />
              <span className="normal-case">~ kim & jeff</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              size="lg"
              onClick={() => {
                router.replace('/');
              }}
            >
              Close
            </AlertDialogCancel>
            <AlertDialogAction size="lg">Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
