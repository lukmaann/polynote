import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const Images = [
  "/placeholders/undraw_card_postal_-5-wvw.svg",
  "/placeholders/undraw_career_development_re_sv91.svg",
  "/placeholders/undraw_cat_epte.svg",
  "/placeholders/undraw_dog_c7i6.svg",
  "/placeholders/undraw_fish_bowl_uu88.svg",
  "/placeholders/undraw_friends_r511.svg",
  "/placeholders/undraw_game_day_ucx9.svg",
  "/placeholders/undraw_happy_music_g6wc.svg",
  "/placeholders/undraw_heavy_box_agqi.svg",
  "/placeholders/undraw_maintenance_re_59vn.svg",
  "/placeholders/undraw_make_it_rain_re_w9pc.svg",
  "/placeholders/undraw_online_transactions_-02-ka.svg",
  "/placeholders/undraw_order_a_car_-3-tww.svg",
  "/placeholders/undraw_personal_site_re_c4bp.svg",
  "/placeholders/undraw_pet_adoption_-2-qkw.svg",
  "/placeholders/undraw_playful_cat_re_ac9g.svg",
  "/placeholders/undraw_playing_fetch_cm19.svg",
  "/placeholders/undraw_refreshing_beverage_td3r.svg",
  "/placeholders/undraw_relaxing_walk_re_7fko.svg",
  "/placeholders/undraw_resume_re_hkth.svg",
  "/placeholders/undraw_teddy_bear_hns1.svg",
  "/placeholders/undraw_walk_dreaming_u-58-a.svg",
  "/placeholders/undraw_xmas_surprise_-57-p1.svg",
  "/placeholders/undraw_yacht_re_kkai (1).svg",
  "/placeholders/undraw_yacht_re_kkai.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("unauthorised");
    }

    const randomImage = Images[Math.floor(Math.random() * Images.length)];

    const canvas = await ctx.db.insert("canvas", {
      title: args.title,
      authorId: identity.subject,
      authorName: identity.name! || "User",
      orgId: args.orgId,
      imageUrl: randomImage,
    });

    return canvas;
  },
});

export const remove = mutation({
  args: {
    id: v.id("canvas"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorised");
    }

    const userID = identity.subject;
    const canvasId = args.id;

    const existingFavorite = await ctx.db
      .query("userFavorties")
      .withIndex("by_user_canvas", (q) =>
        q.eq("userId", userID).eq("canvasId", canvasId)
      )
      .unique();

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id);
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("canvas"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const title = args.title.trim();

    if (!identity) {
      throw new Error("Unauthorised");
    }

    if (!title) {
      throw new Error("Title required");
    }

    if (title.length > 60) {
      throw new Error("Title length should not be more then 60");
    }

    // Patch the document
    await ctx.db.patch(args.id, { title });

    // ✅ Fetch the updated document and return it
    const updatedCanvas = await ctx.db.get(args.id);

    return updatedCanvas;
  },
});

export const favorite = mutation({
  args: {
    id: v.id("canvas"),
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorised");
    }

    const canvas = await ctx.db.get(args.id);
    if (!canvas) {
      throw new Error("No canvas");
    }
    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query("userFavorties")
      .withIndex("by_user_canvas", (q) =>
        q.eq("userId", userId).eq("canvasId", canvas._id)
      )
      .unique();

    if (existingFavorite) {
      throw new Error("Already favorited");
    }

    await ctx.db.insert("userFavorties", {
      userId,
      orgId: args.orgId,
      canvasId: canvas._id,
    });

    return canvas;
  },
});

export const unfavorite = mutation({
  args: {
    id: v.id("canvas"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorised");
    }

    const canvas = await ctx.db.get(args.id);
    if (!canvas) {
      throw new Error("No canvas");
    }
    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query("userFavorties")
      .withIndex("by_user_canvas", (q) =>
        q.eq("userId", userId).eq("canvasId", canvas._id)
      )
      .unique();

    if (!existingFavorite) {
      throw new Error("favorited canvas not found");
    }

    await ctx.db.delete(existingFavorite._id);

    return canvas;
  },
});

export const get = query({
  args: {
    id: v.id("canvas"),
  },
  handler: async (ctx, args) => {
    const canvas = await ctx.db.get(args.id);
    return canvas;
  },
});

export const saveSummary = mutation({
  args: { id: v.id("canvas"), summary: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorised");

    const canvas = await ctx.db.get(args.id);
    if (!canvas) throw new Error("Canvas not found");

    await ctx.db.patch(args.id, { summary: args.summary });
    return await ctx.db.get(args.id);
  },
});

export const listWithSummary = query({
  args: { orgId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("canvas")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .collect();
  },
});

export const getWithSummary = query({
  args: { id: v.id("canvas") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id); // will include summary too
  },
});