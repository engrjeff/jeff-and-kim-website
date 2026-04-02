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

export function FindMySeatForm() {
  const convex = useConvex();
  const router = useRouter();
  const [guestName, setGuestName] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle');

  const isPending = status === 'pending';
  const isSuccess = status === 'success';

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
                className="object-contain size-16"
              />
            </AlertDialogMedia>
            <AlertDialogTitle>Thank you!</AlertDialogTitle>
            <AlertDialogDescription>
              Hi {guestName}! <br />
              We are so thankful for your attendance on our wedding day!
              <br />
              <br />
              You will be seated at <br />
              <span className="font-bold text-xl mt-2 block">
                {tableNumber}
              </span>
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
