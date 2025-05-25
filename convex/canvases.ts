import { v } from "convex/values";
import { query } from "./_generated/server";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorite: v.optional(v.string()),
    mycanvas: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorised");
    }

    if (args.favorite) {
      const favoritedCanvas = await ctx.db
        .query("userFavorties")
        .withIndex("by_user_org", (q) =>
          q.eq("userId", identity.subject).eq("orgId", args.orgId)
        )
        .order("desc")
        .collect();

      const ids = favoritedCanvas.map((canvas) => canvas.canvasId);

      const canvases = await getAllOrThrow(ctx.db, ids);

      return canvases.map((canvas) => ({
        ...canvas,
        isFavorite: true,
      }));
    }

    if (args.mycanvas) {
      const canvases = await ctx.db
        .query("canvas")
        .withIndex("by_authorId_orgId", (q) =>
          q.eq("authorId", identity.subject).eq("orgId", args.orgId)
        )
        .order("desc")
        .collect();
      return canvases;
    }

    let canvases: any[] = [];
    const title = args.search as string;

    if (title) {
      canvases = await ctx.db
        .query("canvas")
        .withSearchIndex("search_title", (q) =>
          q.search("title", title).eq("orgId", args.orgId)
        )
        .collect();
    } else {
      canvases = await ctx.db
        .query("canvas")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
    }

    const canvasWithFavoriteRelation = canvases.map((canvas) => {
      return ctx.db
        .query("userFavorties")
        .withIndex("by_user_canvas", (q) =>
          q.eq("userId", identity.subject).eq("canvasId", canvas._id)
        )
        .unique()
        .then((favorite) => {
          return {
            ...canvas,
            isFavorite: !!favorite,
          };
        });
    });

    const CanvasWithFavoriteBoolean = Promise.all(canvasWithFavoriteRelation);

    return CanvasWithFavoriteBoolean;
  },
});
