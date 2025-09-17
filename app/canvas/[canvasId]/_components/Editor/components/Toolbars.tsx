"use client";

import { FloatingToolbar, Toolbar } from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import { ToolbarMedia } from "./ToolbarMedia";
import { ToolbarInlineAdvanced } from "./TextInlineAdvanced";
import { ToolbarAlignment } from "./ToolbarAlignment";
import { ToolbarBlockSelector } from "./ToolbarBlockSelector";
// import Rename from "../../Rename";

type Props = {
  editor: Editor | null;
};

export function StaticToolbar({ editor }: Props) {
  return (
    <Toolbar
      editor={editor}
      data-toolbar="static"
      className="flex items-center gap-2 bg-white border border-gray-200 shadow-md rounded-xl p-2 text-black"
    >
      {/* Undo / Redo history */}
      <Toolbar.SectionHistory />
      {/* <Rename/> */}

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Block selector */}
      <ToolbarBlockSelector editor={editor} />

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Inline formatting (bold, italic, underline, etc.) */}
      <Toolbar.SectionInline />
      <ToolbarInlineAdvanced editor={editor} />

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Alignment */}
      <ToolbarAlignment editor={editor} />

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Media */}
      <ToolbarMedia editor={editor} />
    </Toolbar>
  );
}

export function SelectionToolbar({ editor }: Props) {
  return (
    <FloatingToolbar
      editor={editor}
      data-toolbar="selection"
      className="flex items-center gap-2 bg-white border border-gray-200 shadow-md rounded-xl p-2 text-black"
    >
      {/* Block selector */}
      <ToolbarBlockSelector editor={editor} />

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Inline formatting */}
      <Toolbar.SectionInline />

      <Toolbar.Separator className="w-px h-6 bg-gray-200 mx-2" />

      {/* Collaboration features */}
      <Toolbar.SectionCollaboration />
    </FloatingToolbar>
  );
}
