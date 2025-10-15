"use client";

import { useEffect, useState, useRef } from "react";
import { FloatingToolbar, Toolbar } from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import { ToolbarMedia } from "./ToolbarMedia";
import { ToolbarInlineAdvanced } from "./TextInlineAdvanced";
import { ToolbarAlignment } from "./ToolbarAlignment";
import { ToolbarBlockSelector } from "./ToolbarBlockSelector";
import { Id } from "@/convex/_generated/dataModel";
import { AiWritingToggle } from "./AiWritingToggle";
import Rename from "../../Rename";

type Props = {
  editor: Editor | null;
  canvasId: Id<"canvas">;
  aiEnabled?: boolean;
  onToggleAi?: (val: boolean) => void;
  loading?: boolean;
};

export function StaticToolbar({
  editor,
  canvasId,
  aiEnabled,
  onToggleAi,
  loading,
}: Props) {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "unsaved">("saved");
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  // --- Auto Save Logic ---
  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      const text = editor.getText().trim();
      const words = text.length > 0 ? text.split(/\s+/).length : 0;
      setWordCount(words);
      setCharCount(text.length);

      setSaveStatus("unsaved");

      if (saveTimeout.current) clearTimeout(saveTimeout.current);

      saveTimeout.current = setTimeout(() => {
        setSaveStatus("saving");

        // Simulate API call or Convex save here
        setTimeout(() => {
          setSaveStatus("saved");
        }, 1200);
      }, 2000);
    };

    editor.on("update", handleUpdate);
    handleUpdate(); // initial run

    return () => {
      editor.off("update", handleUpdate);
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [editor]);

  // Status message styling
  const statusText =
    saveStatus === "saving"
      ? "Saving..."
      : saveStatus === "unsaved"
      ? "Unsaved changes"
      : "Saved ✓";

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-b border-gray-200/60 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-2 text-gray-900 dark:text-gray-100">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <Rename id={canvasId} />
          {onToggleAi && (
            <>
              <Divider />
              <AiWritingToggle
                enabled={aiEnabled ?? false}
                onChange={onToggleAi}
              />
            </>
          )}
        </div>

        {/* Right side — Save Status */}
        <div
          className={`text-sm font-medium bg-gray-200 p-1 px-2 rounded-sm transition-opacity duration-500 ${
            saveStatus === "saving"
              ? " opacity-100"
              : saveStatus === "unsaved"
              ? " opacity-100"
              : " opacity-80"
          }`}
        >
          {statusText}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between px-4 items-center">
          <Toolbar
            editor={editor}
            data-toolbar="static"
            className="flex items-center gap-2 px-4 py-2 text-gray-900 dark:text-gray-100"
          >
            {/* Undo / Redo */}
            <div className="flex items-center gap-0.5 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              <Toolbar.SectionHistory />
            </div>

            <Divider />

            {/* Block selector */}
            <div className="flex items-center p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              <ToolbarBlockSelector editor={editor} />
            </div>

            <Divider />

            {/* Inline formatting */}
            <div className="flex items-center gap-0.5 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              <Toolbar.SectionInline />
              <ToolbarInlineAdvanced editor={editor} />
            </div>

            <Divider />

            {/* Alignment */}
            <div className="flex items-center p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              <ToolbarAlignment editor={editor} />
            </div>

            <Divider />

            {/* Media */}
            <div className="flex items-center p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              <ToolbarMedia editor={editor} canvasId={canvasId} />
            </div>
          </Toolbar>

          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {wordCount} words · {charCount} chars
          </div>
        </div>
      </div>
    </div>
  );
}

// Divider
function Divider() {
  return (
    <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/70 to-transparent dark:via-gray-700/70 mx-2" />
  );
}

export function SelectionToolbar({ editor }: { editor: Editor | null }) {
  return (
    <FloatingToolbar editor={editor} data-toolbar="selection">
     
      <ToolbarBlockSelector editor={editor} />
      <Toolbar.Separator />
      <Toolbar.SectionInline />
    </FloatingToolbar>
  );
}