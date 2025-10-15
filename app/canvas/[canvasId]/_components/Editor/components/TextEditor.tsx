"use client";

import { useState, useEffect, useMemo, useRef } from "react";
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
import { Id } from "@/convex/_generated/dataModel";
import { useModeStore } from "@/store/textorcanvas";
import { improveWriting } from "@/lib/utils";

export function TextEditor({ canvasId }: { canvasId: Id<"canvas"> }) {
  return (
    <ClientSideSuspense fallback={<DocumentSpinner />}>
      <Editor canvasId={canvasId} />
    </ClientSideSuspense>
  );
}

export function Editor({ canvasId }: { canvasId: Id<"canvas"> }) {
  const liveblocks = useLiveblocksExtension();
  const { screenshot, setScreenshot } = useModeStore();

  const [aiWriting, setAiWriting] = useState(false);
  const [loading, setLoading] = useState(false);

  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const abortController = useRef<AbortController | null>(null);

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
        HTMLAttributes: {
          class: "tiptap-image rounded-lg shadow-sm max-w-full",
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class:
            "tiptap-link text-purple-600 underline underline-offset-2 hover:text-purple-700",
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing",
        emptyEditorClass: "tiptap-empty text-gray-400 italic",
      }),
      CustomTaskItem,
      TaskList.configure({
        HTMLAttributes: { class: "tiptap-task-list list-none pl-0" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Typography,
      Youtube.configure({
        modestBranding: true,
        HTMLAttributes: {
          class: "tiptap-youtube rounded-md overflow-hidden",
        },
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

  // Insert screenshots as images
  useEffect(() => {
    if (editor && screenshot) {
      editor.chain().focus().setImage({ src: screenshot }).run();
      setScreenshot(null);
    }
  }, [editor, screenshot, setScreenshot]);

  // AI writing enhancement
  useEffect(() => {
    if (!editor || !aiWriting) return;

    const handleUpdate = () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);

      typingTimeout.current = setTimeout(async () => {
        const text = editor.getText();
        if (!text.trim()) return;

        if (abortController.current) abortController.current.abort();

        const controller = new AbortController();
        abortController.current = controller;

        try {
          setLoading(true);
          const improved = await improveWriting(text, controller.signal);
          editor.commands.setContent(improved, false);
        } catch (err) {
          if ((err as any).name !== "AbortError") console.error(err);
        } finally {
          setLoading(false);
        }
      }, 2500);
    };

    editor.on("update", handleUpdate);

    return () => {
      editor.off("update", handleUpdate);
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (abortController.current) abortController.current.abort();
    };
  }, [editor, aiWriting]);

  const { threads } = useThreads();

  if (!editor) return <DocumentSpinner />;

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-950">
      {/* Fixed top toolbar */}
      <StaticToolbar
        editor={editor}
        canvasId={canvasId}
        aiEnabled={aiWriting}
        onToggleAi={setAiWriting}
        loading={loading}
      />

      {/* Editor body */}
      <main className="flex-1 flex items-start justify-center w-full pt-36 pb-24">
        <div className="w-full max-w-4xl px-6">
          <SelectionToolbar editor={editor} />
          <EditorContent
            editor={editor}
            role="textbox"
            aria-multiline="true"
            aria-label="Collaborative editor"
            className="prose prose-lg dark:prose-invert max-w-none
              bg-white dark:bg-neutral-900 p-10 min-h-[80vh] rounded-2xl shadow-md border border-gray-200/70 dark:border-gray-800/70
              focus:outline-none transition-all duration-300"
          />
          <FloatingComposer editor={editor} style={{ width: 350 }} />
          <FloatingThreads threads={threads} editor={editor} />
        </div>
      </main>

      <Participants />

      {/* AI “improving” floating indicator */}
      {loading && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-100/90 backdrop-blur border border-purple-300/60 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-medium text-purple-700">
              Improving...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Prevent hot-reload crash
EditorView.prototype.updateState = function updateState(state) {
  // @ts-ignore
  if (!this.docView) return;
  // @ts-ignore
  this.updateStateInner(state, this.state.plugins != state.plugins);
};