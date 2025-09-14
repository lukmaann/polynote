"use client";

import { useMemo } from "react";
import { ClientSideSuspense, useThreads } from "@liveblocks/react/suspense";
import {
  FloatingComposer,
  FloatingThreads,
  useLiveblocksExtension,
} from "@liveblocks/react-tiptap";
import Highlight from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";

import { DocumentSpinner } from "../primitives/Spinner";
import { CustomTaskItem } from "./CustomTaskItem";
import { StaticToolbar, SelectionToolbar } from "./Toolbars";
import Participants from "../../Participants";

export function TextEditor() {
  return (
    <ClientSideSuspense fallback={<DocumentSpinner />}>
      <Editor />
    </ClientSideSuspense>
  );
}

export function Editor() {
  const liveblocks = useLiveblocksExtension();

  const extensions = useMemo(
    () => [
      liveblocks,
      StarterKit.configure({
        blockquote: { HTMLAttributes: { class: "tiptap-blockquote" } },
        code: { HTMLAttributes: { class: "tiptap-code" } },
        codeBlock: {
          languageClassPrefix: "language-",
          HTMLAttributes: { class: "tiptap-code-block", spellcheck: false },
        },
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: { class: "tiptap-heading" },
        },
        history: false,
        horizontalRule: { HTMLAttributes: { class: "tiptap-hr" } },
        listItem: { HTMLAttributes: { class: "tiptap-list-item" } },
        orderedList: { HTMLAttributes: { class: "tiptap-ordered-list" } },
        paragraph: { HTMLAttributes: { class: "tiptap-paragraph" } },
      }),
      Highlight.configure({
        HTMLAttributes: { class: "tiptap-highlight bg-yellow-200" },
      }),
      Image.configure({
        HTMLAttributes: { class: "tiptap-image rounded-lg shadow-sm max-w-full" },
      }),
      Link.configure({
        HTMLAttributes: {
          class:
            "tiptap-link text-blue-600 underline underline-offset-2 hover:text-blue-700",
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing…",
        emptyEditorClass: "tiptap-empty text-gray-400 italic",
      }),
      CustomTaskItem,
      TaskList.configure({
        HTMLAttributes: { class: "tiptap-task-list list-none pl-0" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,
      Youtube.configure({
        modestBranding: true,
        HTMLAttributes: { class: "tiptap-youtube rounded-md overflow-hidden" },
      }),
    ],
    [liveblocks]
  );

  const editor = useEditor({
    editorProps: {
      attributes: { class: "tiptap-root" },
    },
    extensions,
  });

  const { threads } = useThreads();

  if (!editor) return <DocumentSpinner />;

  return (
    <div className="w-full h-screen bg-[#FDF8F6] flex flex-col items-center justify-start">
      {/* Floating toolbar at top */}
      <div className="mt-4">
        <StaticToolbar editor={editor} />
      </div>

      {/* Editor box in center */}
      <div className="flex-1 flex items-start justify-center w-full mt-10">
        <div className="w-full max-w-3xl">
          <SelectionToolbar editor={editor} />
          <EditorContent
            editor={editor}
            role="textbox"
            aria-multiline="true"
            aria-label="Document editor"
            className="prose prose-lg max-w-none  bg-white p-6 h-[100vh] border border-gray-200 shadow-md text-black focus:outline-none focus:ring-0 focus:border-transparent"
          />

          <FloatingComposer editor={editor} style={{ width: 350 }} />
          <FloatingThreads threads={threads} editor={editor} />
          <Participants />
        </div>
      </div>
    </div>
  );
}

// Hot-reload fix
EditorView.prototype.updateState = function updateState(state) {
  // @ts-ignore
  if (!this.docView) return;
  // @ts-ignore
  this.updateStateInner(state, this.state.plugins != state.plugins);
};
