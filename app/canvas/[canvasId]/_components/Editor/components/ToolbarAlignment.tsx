"use client";

import { Toolbar } from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "../icons";
import { useModeStore } from "@/store/textorcanvas";
import { MousePointer2 } from "lucide-react";
import { MousePointerIcon } from "../icons/MousePointer";

type Props = {
  editor: Editor | null;
};

export function ToolbarAlignment({ editor }: Props) {
  const { setMode } = useModeStore();

  return (
    <>
      <Toolbar.Toggle
        name="Align left"
        icon={<AlignLeftIcon />}
        className="text-black"
        active={editor?.isActive({ textAlign: "left" }) ?? false}
        onClick={() => editor?.chain().focus().setTextAlign("left").run()}
        disabled={!editor?.can().chain().focus().setTextAlign("left").run()}
      />

      <Toolbar.Toggle
        name="Align center"
        icon={<AlignCenterIcon />}
        className="text-black"
        active={editor?.isActive({ textAlign: "center" }) ?? false}
        onClick={() => editor?.chain().focus().setTextAlign("center").run()}
        disabled={!editor?.can().chain().focus().setTextAlign("center").run()}
      />

      <Toolbar.Toggle
        name="Align right"
        icon={<AlignRightIcon />}
        className="text-black"
        active={editor?.isActive({ textAlign: "right" }) ?? false}
        onClick={() => editor?.chain().focus().setTextAlign("right").run()}
        disabled={!editor?.can().chain().focus().setTextAlign("right").run()}
      />

      <Toolbar.Toggle
        name="Justify"
        icon={<AlignJustifyIcon />}
        className="text-black"
        active={editor?.isActive({ textAlign: "justify" }) ?? false}
        onClick={() => editor?.chain().focus().setTextAlign("justify").run()}
        disabled={!editor?.can().chain().focus().setTextAlign("justify").run()}
      />
    </>
  );
}
