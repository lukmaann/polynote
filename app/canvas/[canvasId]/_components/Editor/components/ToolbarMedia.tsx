"use client";

import { Toolbar } from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import { CodeBlockIcon, ImageIcon, YouTubeIcon } from "../icons";
import { Button } from "../primitives/Button";
import { Input } from "../primitives/Input";
import { Popover } from "../primitives/Popover";
import styles from "./Toolbar.module.css";
import { MousePointerIcon } from "../icons/MousePointer";
import { useModeStore } from "@/store/textorcanvas";
import { summariseContentWithGemini } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { SummaryDialog } from "../../SummaryDialog";
import { AiIcon } from "../icons/AiIcon";

type Props = {
  editor: Editor | null;
  canvasId: Id<"canvas">;
};

export function ToolbarMedia({ editor, canvasId }: Props) {
  const { setMode } = useModeStore();
  const saveSummary = useMutation(api.canvas.saveSummary);

  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [openSummary, setOpenSummary] = useState(false);

  async function handleSummarise() {
    if (!editor) return;

    setLoading(true);
    setOpenSummary(true); // open dialog immediately
    try {
      const content = editor.getText();
      const result = await summariseContentWithGemini(content);

      setSummary(result);
      await saveSummary({ id: canvasId, summary: result });
    } catch (err) {
      console.error("Summarisation failed:", err);
      setSummary("❌ Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  }

  function addImage(url: string) {
    if (!url.length || !editor) return;
    editor.chain().setImage({ src: url }).run();
  }

  function addYouTube(url: string) {
    if (!url.length || !editor) return;
    editor.chain().setYoutubeVideo({ src: url }).run();
  }

  return (
    <>
      {/* Existing buttons */}
      <Toolbar.Toggle
        name="Code block"
        icon={<CodeBlockIcon />}
        className="text-black"
        active={editor?.isActive("codeBlock") ?? false}
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        disabled={!editor?.can().chain().focus().toggleCodeBlock().run()}
      />

      <Popover content={<MediaPopover variant="image" onSubmit={addImage} />}>
        <Toolbar.Toggle
          name="Image"
          className="text-black"
          icon={<ImageIcon />}
          active={editor?.isActive("image") ?? false}
          disabled={!editor?.can().chain().setImage({ src: "" }).run()}
        />
      </Popover>

      <Popover content={<MediaPopover variant="youtube" onSubmit={addYouTube} />}>
        <Toolbar.Toggle
          className="text-black"
          name="YouTube"
          icon={<YouTubeIcon />}
          active={editor?.isActive("youtube") ?? false}
          disabled={!editor?.can().chain().setImage({ src: "" }).run()}
        />
      </Popover>

      {/* 👇 Ask AI button */}
      <Toolbar.Button
        name="Summarise Document"
        className="text-black"
        icon={<AiIcon/>}
        onClick={handleSummarise}
      />

      <Toolbar.Button
        name="Open Canvas"
        className="text-black"
        icon={<MousePointerIcon />}
        onClick={() => setMode("canvas")}
      />

      {/* Summary Dialog */}
      <SummaryDialog
        open={openSummary}
        onClose={() => setOpenSummary(false)}
        summary={summary}
        loading={loading}
      />
    </>
  );
}

type MediaPopoverProps = {
  variant: "image" | "youtube";
  onSubmit: (url: string) => void;
};

function MediaPopover({ variant, onSubmit }: MediaPopoverProps) {
  const [value, setValue] = useState("");

  return (
    <form
      className={styles.toolbarPopover}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <label className={styles.toolbarPopoverLabel}>
        Add {variant === "image" ? "image" : "YouTube"} URL
      </label>
      <div className={styles.toolbarPopoverBar}>
        <Input
          className={styles.toolbarPopoverInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={styles.toolbarPopoverButton}>
          Add {variant === "image" ? "image" : "video"}
        </Button>
      </div>
    </form>
  );
}
