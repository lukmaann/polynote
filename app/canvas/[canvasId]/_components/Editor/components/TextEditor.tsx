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
import Rename from "../../Rename";
import { Id } from "@/convex/_generated/dataModel";
import { useModeStore } from "@/store/textorcanvas";
import { AiWritingToggle } from "./AiWritingToggle";
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

  // Handle screenshot insertion
  useEffect(() => {
    if (editor && screenshot) {
      editor.chain().focus().setImage({ src: screenshot }).run();
      setScreenshot(null);
    }
  }, [editor, screenshot, setScreenshot]);

  // AI Writing idle detection
  useEffect(() => {
    if (!editor || !aiWriting) return;

    const handleUpdate = () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);

      typingTimeout.current = setTimeout(async () => {
        const text = editor.getText();
        if (!text.trim()) return;

        // Cancel any previous request
        if (abortController.current) {
          abortController.current.abort();
        }

        const controller = new AbortController();
        abortController.current = controller;

        try {
          setLoading(true);
          const improved = await improveWriting(text, controller.signal);
          editor.commands.setContent(improved, false);
        } catch (err) {
          if ((err as any).name !== "AbortError") {
            console.error("AI writing error:", err);
          }
        } finally {
          setLoading(false);
        }
      }, 3000); // 1 sec idle
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
    <div className="w-full bg-[#FDF8F6] flex flex-col items-center justify-start">
      <div className="mt-4 flex items-center gap-4">
        <Rename id={canvasId} />
        <div className="flex items-center gap-2">
         

          {loading && (
            <div className="fixed top-28 left-1/2 transform -translate-x-1/2 z-60 animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-50/95 backdrop-blur-md border border-purple-200/80 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-medium text-purple-700">Improving...</span>
              </div>
            </div>
          )}

        </div>
        <StaticToolbar
          editor={editor}
          canvasId={canvasId}
          aiEnabled={aiWriting}
          onToggleAi={setAiWriting}
          loading={loading}
        />
      </div>

      <div className="flex-1 flex items-start justify-center w-full mt-10">
        <div className="w-full max-w-3xl">
          <SelectionToolbar editor={editor} />
          <EditorContent
            editor={editor}
            role="textbox"
            aria-multiline="true"
            aria-label="Document editor"
            className="prose prose-lg max-w-none 
              bg-white p-6 min-h-screen border border-gray-200 shadow-md text-black
              focus:outline-none focus:ring-0 focus:border-transparent"
          />
          <FloatingComposer editor={editor} style={{ width: 350 }} />
          <FloatingThreads threads={threads} editor={editor} />
        </div>
      </div>
      <Participants />
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
