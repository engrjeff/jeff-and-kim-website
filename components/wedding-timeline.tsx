import { MapPin, Heart, Utensils, Sparkles, LucideIcon } from 'lucide-react';

type TimelineEvent = {
  time: string;
  title: string;
  Icon: LucideIcon;
  hideLine?: boolean;
};

const events: TimelineEvent[] = [
  { time: '2:30 PM', title: 'Arrival', Icon: MapPin },
  { time: '3:00 PM', title: 'Ceremony', Icon: Heart },
  { time: '4:30 PM', title: 'Reception', Icon: Utensils },
  { time: '7:00 PM', title: 'Grand Exit', Icon: Sparkles, hideLine: true },
];

function EventItem({ event }: { event: TimelineEvent }) {
  return (
    <div className="flex flex-col items-center">
      <span className="inline-block bg-primary/10 text-primary p-2 rounded-full grow-0 mb-2">
        <event.Icon strokeWidth={2} className="size-4" />
      </span>
      <p className="font-elegant font-semibold text-xl">{event.title}</p>
      <time className="text-lg">{event.time}</time>
      {event.hideLine ? null : (
        <div aria-hidden className="w-px bg-primary/20 h-8 my-2 relative"></div>
      )}
    </div>
  );
}

export function WeddingTimeline() {
  return (
    <ol>
      {events.map((event) => (
        <li key={event.title}>
          <EventItem event={event} />
        </li>
      ))}
    </ol>
  );
}

// after:absolute after:size-2 after:rounded-full after:top-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:ring-2 after:ring-primary/30
