import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  // Primary editor document (persistent snapshot + metadata)
  editorDocs: defineTable({
    title: v.string(),
    canvasId: v.optional(v.id("canvas")),   // optional link to your canvas table
    orgId: v.optional(v.string()),           // multi-tenant support
    authorId: v.optional(v.id("users")),     // creator (Convex users table)
    summary: v.optional(v.string()),         // AI summary or excerpt
    snapshot: v.string(),                    // serialized document snapshot (JSON string or compressed)
    version: v.number(),                     // incrementing version number for snapshots
    createdAt: v.string(),
    updatedAt: v.string()
  })
    .index("by_org", ["orgId"])
    .index("by_author_org", ["authorId", "orgId"])
    .index("by_canvas", ["canvasId"])
    .index("by_updatedAt", ["updatedAt"]),

  // Optional: block/node level storage for partial loading / searches
  editorBlocks: defineTable({
    docId: v.id("editorDocs"),
    blockType: v.string(),      // e.g., "paragraph", "heading", "image", "shape"
    content: v.string(),        // serialized content for the block (JSON / plain text)
    orderKey: v.string(),       // lexicographic key for ordering blocks
    meta: v.optional(v.string()), // optional metadata (JSON string)
    createdAt: v.string(),
    updatedAt: v.string()
  })
    .index("by_doc", ["docId"])
    .index("by_doc_order", ["docId", "orderKey"]),

  // Revision log: append-only deltas (for history, audit, undo)
  editorRevisions: defineTable({
    docId: v.id("editorDocs"),
    authorId: v.optional(v.id("users")),
    delta: v.string(),          // serialized delta / operation (CRDT/OT or patch)
    snapshotVersion: v.number(),// version number after applying this revision
    summary: v.optional(v.string()), // optional short message or AI note
    createdAt: v.string()
  })
    .index("by_doc", ["docId"])
    .index("by_doc_createdAt", ["docId", "createdAt"]),

  // Presence info (last-known cursor/selection) — useful as fallback or persistent presence
  editorPresence: defineTable({
    docId: v.id("editorDocs"),
    userId: v.id("users"),
    cursor: v.optional(v.string()),     // serialized cursor/selection (JSON)
    presenceMeta: v.optional(v.string()), // JSON: e.g., { color, displayName }
    lastActive: v.string()
  })
    .index("by_doc", ["docId"])
    .index("by_user_doc", ["userId", "docId"]),

  // Comments / annotations attached to doc or specific block
  editorComments: defineTable({
    docId: v.id("editorDocs"),
    blockId: v.optional(v.id("editorBlocks")),
    authorId: v.id("users"),
    content: v.string(),
    resolved: v.optional(v.boolean()),
    resolvedBy: v.optional(v.id("users")),
    createdAt: v.string(),
    updatedAt: v.optional(v.string())
  })
    .index("by_doc", ["docId"])
    .index("by_block", ["blockId"])
    .index("by_author", ["authorId"]),

  // Optional per-document settings and feature flags
  editorSettings: defineTable({
    docId: v.id("editorDocs"),
    settingsJson: v.string(),   // serialized settings (JSON)
    updatedAt: v.string()
  })
    .index("by_doc", ["docId"])
});
