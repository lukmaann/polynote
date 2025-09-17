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

  // ✅ State for dialog + selection overlay
  const [openDialog, setOpenDialog] = useState(false);
  const [selecting, setSelecting] = useState(false);

  if (!data) {
    return <ToolBarSkeleton />;
  }

  return (
    <>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 shadow-md rounded-xl z-50">
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
        <div className="w-px h-6 bg-gray-200 mx-2" />

        {/* Select tool */}
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

        {/* Rectangle tool */}
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

        {/* Ellipse tool */}
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

        {/* Pencil tool */}
        <ToolButton
          label="Pen"
          isActive={canvasState.mode == CanvasMode.Pencil}
          icon={Pencil}
          onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
        />

        {/* Sticky Note tool */}
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
          onClick={() => setOpenDialog(true)} // ✅ open confirmation dialog
          

        />

      

        {/* ...

        <ToolButton
          label="Open Text Editor"
          isActive={mode === "editor"}
          icon={FileText}
          onClick={async () => {
            const screenshot = await captureCanvas("canvas-svg");
            if (screenshot) {
              setScreenshot(screenshot);
            }
            setMode("editor");
          }}
        /> */}

      </div>

      {/* ✅ Confirmation Dialog */}
      <OpenEditorDialog
        open={openDialog}
        onCancel={() => setOpenDialog(false)}
        onConfirm={() => {
          setOpenDialog(false);
          setSelecting(true); // show drag-to-select overlay
        }}
        onSkip={() => {
          setOpenDialog(false);
          setScreenshot(null);   // 👈 make sure no leftover image
          setMode("editor");     // open clean editor
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
              setScreenshot(cropped);   // save screenshot
              setMode("editor");        // switch editor mode
            }
          }}
        />
      )}
    </>
  );
};

export const ToolBarSkeleton = () => {
  return (
    <Skeleton className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2 py-1 w-[340px] h-11 bg-white border border-gray-200 shadow-md rounded-xl" />
  );
};

export default ToolBar;
