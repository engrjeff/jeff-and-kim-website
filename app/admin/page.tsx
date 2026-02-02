/* eslint-disable @next/next/no-img-element */
'use client';

import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUpDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

type Guest = Doc<'guests'>;
type SortField = 'name' | 'rsvp';
type SortOrder = 'asc' | 'desc';
type FilterStatus = 'all' | 'confirmed' | 'pending';

const ITEMS_PER_PAGE = 10;

function getGuestDescription(guest: Guest) {
  const relationship =
    guest.side === 'Both'
      ? `${guest.relationship} of Kim & Jeff`
      : `${guest.relationship} of the ${guest.side}`;

  return [relationship, guest.role, guest.special_role]
    .filter(Boolean)
    .join(' / ');
}

export default function AdminPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const guests = useQuery(api.guests.get);

  const filteredAndSortedGuests = useMemo(() => {
    if (!guests) return [];

    let result = [...guests];

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (guest) =>
          guest.name.toLowerCase().includes(searchLower) ||
          guest.relationship.toLowerCase().includes(searchLower) ||
          guest.role?.toLowerCase().includes(searchLower) ||
          guest.special_role?.toLowerCase().includes(searchLower),
      );
    }

    // Filter by RSVP status
    if (filter === 'confirmed') {
      result = result.filter((guest) => guest.rsvp);
    } else if (filter === 'pending') {
      result = result.filter((guest) => !guest.rsvp);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === 'rsvp') {
        comparison = (a.rsvp ? 1 : 0) - (b.rsvp ? 1 : 0);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [guests, search, filter, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedGuests.length / ITEMS_PER_PAGE);
  const paginatedGuests = filteredAndSortedGuests.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const confirmedCount = guests?.filter((g) => g.rsvp).length ?? 0;
  const totalCount = guests?.length ?? 0;

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: FilterStatus) => {
    setFilter(value);
    setCurrentPage(1);
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <img
          src="/assets/monogram-v2-on-white.svg"
          alt="Kim and Jeff"
          className="object-contain size-16 mb-6 mx-auto"
        />
        <Link href="/" className="hover:underline">
          &larr; Back to Home
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Guest List</h1>
          <p className="text-gray-600 mt-1">
            {confirmedCount} of {totalCount} guests have already RSVP&apos;d
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search guests..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
          <Select
            value={filter}
            onValueChange={(value) => handleFilterChange(value as FilterStatus)}
          >
            <SelectTrigger className="w-full sm:w-45 bg-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Guests</SelectItem>
              <SelectItem value="confirmed">RSVP&apos;d</SelectItem>
              <SelectItem value="pending">Not Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">
                  <button
                    onClick={() => toggleSort('name')}
                    className="flex items-center gap-1 font-semibold text-gray-700 hover:text-gray-900"
                  >
                    Name
                    <ArrowUpDown className="size-4" />
                  </button>
                </th>
                <th className="text-right p-4">
                  <button
                    onClick={() => toggleSort('rsvp')}
                    className="flex items-center gap-1 font-semibold text-gray-700 hover:text-gray-900 ml-auto"
                  >
                    Status
                    <ArrowUpDown className="size-4" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {guests === undefined ? (
                <tr>
                  <td colSpan={2} className="p-8 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : paginatedGuests.length === 0 ? (
                <tr>
                  <td colSpan={2} className="p-8 text-center text-gray-500">
                    No guests found.
                  </td>
                </tr>
              ) : (
                paginatedGuests.map((guest) => (
                  <tr key={guest._id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">
                        {guest.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {getGuestDescription(guest)}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      {guest.rsvp ? (
                        <Badge variant="default">RSVP&apos;d</Badge>
                      ) : (
                        <Badge variant="outline">Not Yet</Badge>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t bg-gray-50">
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-4 text-sm text-gray-500 text-center">
          Showing {paginatedGuests.length} of {filteredAndSortedGuests.length}{' '}
          guests
          {filteredAndSortedGuests.length !== totalCount &&
            ` (filtered from ${totalCount} total)`}
        </div>
      </div>
    </div>
  );
}
