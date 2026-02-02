/* eslint-disable @next/next/no-img-element */
'use client';

import { useMutation } from 'convex/react';
import { GuestList } from './guest-list';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useState, type FormEvent } from 'react';
import confetti from 'canvas-confetti';

function showConfetti() {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ['#192859', '#2B4376', '#6C7EA7', '#889DB9', '#C0C2C1'];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });
    requestAnimationFrame(frame);
  };
  frame();
}

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

export function RSVPForm() {
  const confirmRSVP = useMutation(api.guests.confirmRSVP);
  const router = useRouter();
  const [guestName, setGuestName] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasConfirmedAlready, setHasConfirmedAlready] = useState(false);

  async function handleConfirmRSVP(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      setIsPending(true);

      const formData = new FormData(event.currentTarget);

      const guestId = formData.get('guestId') as Id<'guests'>;
      const guestName = formData.get('guest') as string;
      const hasConfirmedRsvp = formData.get('hasConfirmedRsvp') as string;

      if (!guestId) return;

      if (hasConfirmedRsvp === 'confirmed') {
        setGuestName(guestName);
        setHasConfirmedAlready(true);
        return;
      }

      const result = await confirmRSVP({ id: guestId });

      if (result.success) {
        setGuestName(guestName);
        setIsSuccess(true);
        showConfetti();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <form onSubmit={handleConfirmRSVP}>
        <fieldset disabled={isPending} className="space-y-4">
          <GuestList />
          <Button type="submit" size="cta" className="font-elegant w-full">
            {isPending && <Spinner data-icon="inline-start" />}{' '}
            {isPending ? 'Please wait...' : 'Confirm My Attendance'}
          </Button>
        </fieldset>
      </form>
      <AlertDialog open={isSuccess} onOpenChange={setIsSuccess}>
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
              We are so thankful for confirming your attendance on our wedding
              day! We look forward to seeing you there. Grace to you!
              <br />
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
            <AlertDialogAction
              size="lg"
              onClick={() => {
                router.replace('/#map');
                setIsSuccess(false);
              }}
            >
              View Map
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={hasConfirmedAlready}
        onOpenChange={setHasConfirmedAlready}
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
            <AlertDialogTitle>Thanks for coming back!</AlertDialogTitle>
            <AlertDialogDescription>
              Hi {guestName}! <br />
              It looks like you have already RSVP&apos;d. <br />
              We look forward to seeing you on our wedding day!
              <br />
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
            <AlertDialogAction
              size="lg"
              onClick={() => {
                router.replace('/#map');
                setIsSuccess(false);
              }}
            >
              View Map
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
