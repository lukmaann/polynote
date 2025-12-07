import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  organizations: defineTable({
    name: v.string(),                   // Organization name
    ownerId: v.id("users"),             // Reference to owner (Convex users table)
    orgSlug: v.string(),                // Unique short identifier (e.g., "acme-corp")
    description: v.optional(v.string()),// Optional org description
    imageUrl: v.optional(v.string()),   // Org logo / avatar
    createdAt: v.string(),              // Timestamp
  })
    // 🔍 Indexes for lookups
    .index("by_owner", ["ownerId"])
    .index("by_slug", ["orgSlug"]),

  // 👥 Organization Members Table — maps users to orgs + roles
  orgMembers: defineTable({
    orgId: v.id("organizations"),       // Linked organization
    userId: v.id("users"),              // Linked user
    role: v.string(),                   // Role: "admin" | "member" | "viewer"
    joinedAt: v.string(),               // Timestamp of joining
    invitedBy: v.optional(v.id("users"))// Who invited them (optional)
  })
    // 🔍 Useful indexes
    .index("by_org", ["orgId"])
    .index("by_user", ["userId"])
    .index("by_org_user", ["orgId", "userId"]),
});
