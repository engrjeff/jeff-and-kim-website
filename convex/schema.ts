import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Other tables here...

  guests: defineTable({
    name: v.string(),
    relationship: v.string(),
    role: v.optional(v.string()),
    rsvp: v.boolean(),
    side: v.string(),
    special_role: v.optional(v.string()),
  }),
});
