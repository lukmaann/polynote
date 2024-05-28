import {mutation} from "./_generated/server";
import {v} from "convex/values";


const Images=[
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
]



export const create=mutation({
    args:{
        orgId:v.string(),
        title:v.string()
    },
    handler:async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();

        if(!identity){
            
            console.log("unauthorised")
            throw new Error("unauthorised");
            
        }

        const randomImage=Images[Math.floor(Math.random()*Images.length)];

        const canvas=await ctx.db.insert("canvas",{
            title:args.title,
            authorId:identity.subject,
            authorName:identity.name!||"User",
            orgId:args.orgId,
            imageUrl:randomImage
        })
        

        return canvas;

    }
})