import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db
      .query('guests')
      .filter((q) => q.eq(q.field('rsvp'), false))
      .collect();
  },
});

export const confirmRSVP = mutation({
  args: { id: v.id('guests') },
  handler: async (ctx, args) => {
    await ctx.db.patch('guests', args.id, { rsvp: true });

    return { success: true };
  },
});
