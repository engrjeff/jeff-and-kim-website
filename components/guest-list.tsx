'use client';

import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useState } from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';

type Guest = Doc<'guests'>;

function getGuestDescription(guest: Guest) {
  const relationship =
    guest.side === 'Both'
      ? `${guest.relationship} of Kim & Jeff`
      : `${guest.relationship} of the ${guest.side}`;

  return [relationship, guest.role, guest.special_role]
    .filter(Boolean)
    .join(' / ');
}

export function GuestList() {
  const guests = useQuery(api.guests.get);
  const [selectedGuestId, setSelectedGuestId] = useState('');

  return (
    <Combobox
      items={guests ?? []}
      required
      disabled={guests === undefined}
      itemToStringLabel={(guest: Guest) => guest.name}
      onValueChange={(value) => {
        if (!value) {
          setSelectedGuestId('');
          return;
        }

        setSelectedGuestId(value._id);
      }}
    >
      <input type="hidden" hidden name="guestId" value={selectedGuestId} />
      <ComboboxInput
        autoFocus
        name="guest"
        placeholder="Enter your name"
        className="bg-white h-12 w-full"
      />
      <ComboboxContent>
        <ComboboxEmpty className="py-10">No results found.</ComboboxEmpty>
        <ComboboxList>
          {(guest: Guest) => (
            <ComboboxItem key={guest._id} value={guest}>
              <Item size="xs" className="p-0">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap text-base">
                    {guest.name}
                  </ItemTitle>
                  <ItemDescription className="text-xs">
                    {getGuestDescription(guest)}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
