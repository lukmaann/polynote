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
import { MoreHorizontalIcon, Sparkles } from "lucide-react";
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

  const canvas = useQuery(api.canvas.get, { id });
  const summary = canvas?.summary;

  const [openSummary, setOpenSummary] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnFavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
    }
  };

  const authorLabel = authorid === userId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(time, { addSuffix: true });

  return (
    <div
      className="
        group relative flex flex-col justify-between overflow-hidden
        aspect-[100/127]
        rounded-2xl border border-gray-200/60 dark:border-gray-800/60
        bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md
        shadow-md shadow-gray-300/30 dark:shadow-black/40
        hover:shadow-lg hover:scale-[1.02] transition-all duration-300
      "
    >
      {/* Image Area */}
      <Link
        href={`/canvas/${id}`}
        className="flex-1 relative block rounded-t-2xl overflow-hidden"
      >
        <div className="relative w-full h-full bg-gray-50 dark:bg-neutral-900">
          <Image
            src={imageUrl}
            alt="Canvas preview"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <Overlay />

        {/* Summary Hover Button */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-t from-black/40 via-black/20 to-transparent
          "
        >
          <Button
            className="
              flex items-center gap-2 px-4 py-2 text-sm font-medium
              bg-gradient-to-r from-purple-600 to-blue-600
              hover:from-purple-700 hover:to-blue-700
              text-white rounded-full shadow-lg shadow-purple-500/30
              transition-transform hover:scale-105
            "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (summary) {
                setOpenSummary(true);
              } else {
                toast.info("No summary yet. Open document to generate one.");
              }
            }}
          >
            <Sparkles className="w-4 h-4" />
            Show Summary
          </Button>
        </div>
      </Link>

      {/* Floating Actions (top-right) */}
      <div
        className="
          absolute top-3 right-3 opacity-0 group-hover:opacity-100
          transition-opacity duration-300 z-10
        "
      >
        <Actions id={id} title={title} side="right" authorId={authorid}>
          <button
            className="
              p-2 rounded-lg bg-white/70 dark:bg-neutral-800/60
              backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/60
              hover:bg-white dark:hover:bg-neutral-700/80
              transition-all shadow-sm
            "
          >
            <MoreHorizontalIcon className="w-4 h-4 text-gray-600 dark:text-gray-200" />
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

// Skeleton
CanvasCard.Skeleton = function CanvasSkeleton() {
  return (
    <div
      className="
        aspect-[100/127] rounded-2xl
        bg-white/60 dark:bg-neutral-900/60
        border border-gray-200/60 dark:border-gray-800/60
        shadow-sm
      "
    >
      <Skeleton className="w-full h-full rounded-2xl" />
    </div>
  );
};

export default CanvasCard;