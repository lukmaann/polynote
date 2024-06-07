import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret:
    "sk_dev_C8owv1crFPQyoj6cGOsEGdW23XZcBWXVrKIVr4kWTt7p-gihp_GxQybyMABkmop2",
});




//creatong a post route for handling authentication in room

export const POST = async (request: Request) => {

  //get the current user and authorisation using auth and current user from clerk becouse we are using clerk authentocation here   
  const authorization = await auth();
  const user = await currentUser();

  if (!authorization || !user) {
    return new Response("Unauthorised", { status: 403 });
  }

  const { room } = await request.json();
  const canvas = await convex.query(api.canvas.get, { id: room });

  if (canvas?.orgId !== authorization?.orgId) {
    return new Response("Unauthorised ", { status: 403 });
  }


  const userInfo={
    name:user.firstName || "Anonymous",
    picture:user.imageUrl
  }

  const session=liveblocks.prepareSession(user.id,{userInfo});

  if(room){
    session.allow(room,session.FULL_ACCESS);
  }

  const {status,body}=await session.authorize();

  console.log({userInfo})
  

  return new Response(body,{status})
};
