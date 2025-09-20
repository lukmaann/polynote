"use client";

import { FloatingToolbar, Toolbar } from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import { ToolbarMedia } from "./ToolbarMedia";
import { ToolbarInlineAdvanced } from "./TextInlineAdvanced";
import { ToolbarAlignment } from "./ToolbarAlignment";
import { ToolbarBlockSelector } from "./ToolbarBlockSelector";
import { Id } from "@/convex/_generated/dataModel";
import { AiWritingToggle } from "./AiWritingToggle";

type Props = {
  editor: Editor | null;
  canvasId: Id<"canvas">;
  aiEnabled?: boolean;
  onToggleAi?: (val: boolean) => void;
  loading?: boolean;
};

export function StaticToolbar({ editor, canvasId, aiEnabled, onToggleAi, loading }: Props) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/80 shadow-sm">
      <div className="max-w-full overflow-x-auto">
        <Toolbar
          editor={editor}
          data-toolbar="static"
          className="flex items-center gap-1 px-4 py-2.5 text-black min-w-max"
        >
          {/* Undo / Redo history */}
          <div className="flex items-center gap-0.5 p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
            <Toolbar.SectionHistory />
          </div>

          <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

          {/* Block selector */}
          <div className="flex items-center p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
            <ToolbarBlockSelector editor={editor} />
          </div>

          <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

          {/* Inline formatting */}
          <div className="flex items-center gap-0.5 p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
            <Toolbar.SectionInline />
            <ToolbarInlineAdvanced editor={editor} />
          </div>

          <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

          {/* Alignment */}
          <div className="flex items-center p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
            <ToolbarAlignment editor={editor} />
          </div>

          <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

          {/* Media */}
          <div className="flex items-center p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
            <ToolbarMedia editor={editor} canvasId={canvasId} />
          </div>

          {/* AI Writing toggle - right aligned */}
          {onToggleAi && (
            <>
              <div className="flex-1" /> {/* Spacer to push AI toggle to the right */}
              <div className="flex items-center gap-2 ml-4">
                <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent" />
                <AiWritingToggle enabled={aiEnabled ?? false} onChange={onToggleAi} />
                
              </div>
            </>
          )}
        </Toolbar>
      </div>
    </div>
  );
}

export function SelectionToolbar({ editor }: { editor: Editor | null }) {
  return (
    <FloatingToolbar
      editor={editor}
      data-toolbar="selection"
      className="flex items-center gap-1 bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg rounded-xl p-2 text-black"
      style={{
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)'
      }}
    >
      {/* Block selector */}
      <div className="flex items-center p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
        <ToolbarBlockSelector editor={editor} />
      </div>

      <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

      {/* Inline formatting */}
      <div className="flex items-center gap-0.5 p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
        <Toolbar.SectionInline />
      </div>

      <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2" />

      {/* Collaboration features */}
      <div className="flex items-center p-1 rounded-lg hover:bg-gray-100/60 transition-colors">
        <Toolbar.SectionCollaboration />
      </div>
    </FloatingToolbar>
  );
}