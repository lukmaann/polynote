import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";
import { appendFile } from "fs";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),             
    email: v.string(),               
    name: v.optional(v.string()),    
    imageUrl: v.optional(v.string()),
    orgId: v.optional(v.string()),   
    role: v.optional(v.string()),    
    lastActive: v.optional(v.string()),
  })

    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_org", ["orgId"]),
});



























