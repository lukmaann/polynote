"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import ToolButton from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import {
  Circle,
  MousePointer2,
  Pencil,
  Square,
  StickyNote,
  FileText,
  Undo,
  Redo,
  Type,
} from "lucide-react";
import { useModeStore } from "@/store/textorcanvas";
import { useState } from "react";

// ✅ New modular imports
import CanvasSelectionOverlay from "./canvasSelectionOverlay";
import { captureCanvas } from "./canvasCapture";
import OpenEditorDialog from "./openEditorDialog";

interface ToolBarProps {
  canvasId: string;
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;

  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const ToolBar = ({
  canvasId,
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolBarProps) => {
  const data = useQuery(api.canvas.get, {
    id: canvasId as Id<"canvas">,
  });

  const { mode, setMode, setScreenshot } = useModeStore();

  const [openDialog, setOpenDialog] = useState(false);
  const [selecting, setSelecting] = useState(false);

  if (!data) {
    return <ToolBarSkeleton />;
  }

  return (
    <>
      <div
        className="
          absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 
          px-3 py-2 rounded-2xl z-50
          backdrop-blur-md bg-white/20 border border-white/30
          shadow-[0_8px_30px_rgb(0,0,0,0.2)]
          transition-all duration-300 ease-in-out
          hover:bg-white/30 hover:border-white/40
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
          boxShadow:
            "0 8px 25px rgba(0,0,0,0.25), inset 0 0 0.5px rgba(255,255,255,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Undo / Redo */}
        <ToolButton
          label="Undo"
          isActive={false}
          icon={Undo}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          isActive={false}
          icon={Redo}
          onClick={redo}
          isDisabled={!canRedo}
        />

        {/* Divider */}
        <div className="w-px h-6 bg-white/30 mx-2" />

        {/* Select */}
        <ToolButton
          label="Select"
          isActive={
            canvasState.mode == CanvasMode.None ||
            canvasState.mode == CanvasMode.SelectionNet ||
            canvasState.mode == CanvasMode.Translating ||
            canvasState.mode == CanvasMode.Resizing ||
            canvasState.mode == CanvasMode.Pressing
          }
          icon={MousePointer2}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
        />

        {/* Text */}
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />

        {/* Rectangle */}
        <ToolButton
          label="Rectangle"
          isActive={
            canvasState.mode == CanvasMode.Inserting &&
            canvasState.layerType == LayerType.Rectangle
          }
          icon={Square}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
        />

        {/* Ellipse */}
        <ToolButton
          label="Ellipse"
          isActive={
            canvasState.mode == CanvasMode.Inserting &&
            canvasState.layerType == LayerType.Ellipse
          }
          icon={Circle}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
        />

        {/* Pen */}
        <ToolButton
          label="Pen"
          isActive={canvasState.mode == CanvasMode.Pencil}
          icon={Pencil}
          onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
        />

        {/* Sticky Note */}
        <ToolButton
          label="Sticky Note"
          isActive={
            canvasState.mode == CanvasMode.Inserting &&
            canvasState.layerType == LayerType.Note
          }
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
        />

        {/* Switch to Editor */}
        <ToolButton
          label="Open Text Editor"
          isActive={mode === "editor"}
          icon={FileText}
          onClick={() => setOpenDialog(true)}
        />
      </div>

      {/* ✅ Confirmation Dialog */}
      <OpenEditorDialog
        open={openDialog}
        onCancel={() => setOpenDialog(false)}
        onConfirm={() => {
          setOpenDialog(false);
          setSelecting(true);
        }}
        onSkip={() => {
          setOpenDialog(false);
          setScreenshot(null);
          setMode("editor");
        }}
      />

      {/* ✅ Drag-to-select Overlay */}
      {selecting && (
        <CanvasSelectionOverlay
          onCancel={() => setSelecting(false)}
          onSelect={async (rect) => {
            setSelecting(false);
            const cropped = await captureCanvas("canvas-root");
            if (cropped) {
              setScreenshot(cropped);
              setMode("editor");
            }
          }}
        />
      )}
    </>
  );
};

export const ToolBarSkeleton = () => {
  return (
    <Skeleton className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 w-[360px] h-11 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-[0_8px_25px_rgb(0,0,0,0.25)]" />
  );
};

export default ToolBar;