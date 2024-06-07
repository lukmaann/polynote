import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  canvas: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_org", ["orgId"]).index("by_authorId_orgId",["authorId","orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
  userFavorties: defineTable({
    orgId: v.string(),
    userId: v.string(),
    canvasId: v.id("canvas"),
  })
    .index("by_canvas", ["canvasId"])
    .index("by_user_org", ["userId", "orgId"])
    .index("by_user_canvas", ["userId", "canvasId"])
    .index("by_user_canvas_org", ["userId", "canvasId", "orgId"]),
});
