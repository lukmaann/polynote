"use client";

import { useState } from "react";
import Canvas from "./_components/Canvas";
import Room from "@/components/room";
import Loading from "./_components/loading";
import { Editor } from "./_components/Editor/components/TextEditor";

import { useModeStore } from "@/store/textorcanvas";

interface CanvasPageProps {
  params: {
    canvasId: string;
  };
}

const CanvasPage = ({ params }: CanvasPageProps) => {
  const { mode, setMode } = useModeStore();

  return (
    <Room roomId={params.canvasId} fallback={<Loading />}>
     

      {/* Conditional render */}
      {mode === "canvas" && <Canvas canvasId={params.canvasId} />}

      {mode === "editor" && (
        <div className="text-editor p-4">
          <Editor />
        </div>
      )}
      
    </Room>
  );
};

export default CanvasPage;
