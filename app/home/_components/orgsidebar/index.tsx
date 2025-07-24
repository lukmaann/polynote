"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Star,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import SettingsButton from "./Settingsbutton";
import InviteButton from "./InviteButton";
import { useOrganization } from "@clerk/nextjs";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "../hint";
import AllCanvasesButton from "./allCanvasesButton";
import FavoriteButton from "./favoriteCanvasButton";
import MyCanvasButton from "./myCanvasButton";
import { Palette } from "lucide-react";

const OrgSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const searchParams = useSearchParams();
  const { organization } = useOrganization();
  const favorite = searchParams.get("favorite") || "";
  const mycanvas = searchParams.get("mycanvas") || "";

  return (
    <div
      className={cn(
        "hidden text-muted-foreground relative lg:flex h-full flex-col space-y-6 pl-3 pt-3 transition-all duration-500",
        { "w-[60px] ": collapsed, "w-[206px]": !collapsed }
      )}
    >
      <div className="flex items-center justify-between relative">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
          <Palette className="w-6 h-6 text-white" />
        </div>
      </div>
      {!collapsed && (
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "flex justify-between items-center p-[6px] w-full",
              organizationSwitcherTrigger: {
                border: "1px solid black",
                width: "100%",
                padding: "6px",
                justifyContent: "space-between",
              },
              variables: {
                colorPrimary: "black",
              },
            },
          }}
        />
      )}

      {organization && (
        <div className="space-y-1 w-full flex flex-1 flex-col">
          <AllCanvasesButton
            collapsed={collapsed}
            favorite={favorite}
            mycanvas={mycanvas}
          />
          <FavoriteButton
            collapsed={collapsed}
            favorite={favorite}
            mycanvas={mycanvas}
          />
          <MyCanvasButton
            collapsed={collapsed}
            favorite={favorite}
            mycanvas={mycanvas}
          />

          <div className="absolute   bottom-5 space-y-1 w-full flex-1 flex flex-col">
            <hr className="w-[70%] m-auto" />
            <SettingsButton collapsed={collapsed} />
            <InviteButton collapsed={collapsed} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgSidebar;
