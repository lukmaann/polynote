"use client";

import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import Footer from "./footer";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { useQuery } from "convex/react";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import { SummaryDialog } from "@/app/canvas/[canvasId]/_components/SummaryDialog";

interface CanvasCardProps {
  id: Id<"canvas">;
  orgId: string;
  title: string;
  authorName: string;
  authorid: string;
  time: number;
  imageUrl: string;
  isFavorite: boolean;
}

const CanvasCard = ({
  id,
  orgId,
  title,
  authorName,
  authorid,
  time,
  imageUrl,
  isFavorite,
}: CanvasCardProps) => {
  const { userId } = useAuth();

  const { mutate: onFavorite, pending: pendingFavorite } = useAPiMutation(
    api.canvas.favorite
  );
  const { mutate: onUnFavorite, pending: pendingUnfavorite } = useAPiMutation(
    api.canvas.unfavorite
  );

  // fetch canvas doc (includes summary if stored)
  const canvas = useQuery(api.canvas.get, { id });
  const summary = canvas?.summary;

  // local state for dialog
  const [openSummary, setOpenSummary] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnFavorite({ id }).catch(() => {
        toast.error("Failed to Unfavorite");
      });
    } else {
      onFavorite({ id, orgId }).catch(() => {
        toast.error("Failed to Favorite");
      });
    }
  };

  const authorLabel = authorid === userId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(time, { addSuffix: true });

  return (
    <div className="group aspect-[100/127] border-2 rounded-lg flex flex-col justify-between overflow-hidden relative">
      {/* Image & link area */}
      <Link
        href={`/canvas/${id}`}
        className="flex-1 relative block bg-purple-200"
      >
        <Image src={imageUrl} alt="doodle" fill className="object-contain" />
        <Overlay />

        {/* Summarise button in center (hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            className="bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (summary) {
                setOpenSummary(true);
              } else {
                toast.info(
                  "No summary available. Open the document and generate one."
                );
              }
            }}
          >
            Show summary
          </Button>
        </div>
      </Link>

      {/* Actions (menu top-right) */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Actions id={id} title={title} side="right" authorId={authorid}>
          <button className="z-10 p-2 rounded bg-black/40 hover:bg-black/60 transition">
            <MoreHorizontalIcon className="text-white" />
          </button>
        </Actions>
      </div>

      {/* Footer */}
      <Footer
        isFavorite={isFavorite}
        title={title}
        onclick={toggleFavorite}
        disabled={pendingFavorite || pendingUnfavorite}
        authorLabel={authorLabel}
        time={createdAtLabel}
      />

      {/* Summary Dialog */}
      <SummaryDialog
        open={openSummary}
        onClose={() => setOpenSummary(false)}
        summary={summary ?? null}
      />
    </div>
  );
};

CanvasCard.Skeleton = function CanvasSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg ">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default CanvasCard;
