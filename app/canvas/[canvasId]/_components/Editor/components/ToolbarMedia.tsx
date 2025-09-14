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

type Props = {
  editor: Editor | null;
};

export function ToolbarMedia({ editor }: Props) {
    const {setMode}=useModeStore();




  function addImage(url: string) {
    if (!url.length || !editor) {
      return;
    }

    editor.chain().setImage({ src: url }).run();
  }

  function addYouTube(url: string) {
    if (!url.length || !editor) {
      return;
    }

    editor.chain().setYoutubeVideo({ src: url }).run();
  }

  return (
    <>
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
          icon={<ImageIcon />}
          active={editor?.isActive("image") ?? false}
          disabled={!editor?.can().chain().setImage({ src: "" }).run()}
        />
      </Popover>

      <Popover
        content={<MediaPopover variant="youtube" onSubmit={addYouTube} />}
      >
        <Toolbar.Toggle
          name="YouTube"
          icon={<YouTubeIcon />}
          active={editor?.isActive("youtube") ?? false}
          disabled={!editor?.can().chain().setImage({ src: "" }).run()}
        />

      




      </Popover>

        <Toolbar.Button
        name="Open Canvas"
        icon={<MousePointerIcon/>}
        onClick={() => setMode("canvas")}
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
      <label className={styles.toolbarPopoverLabel} htmlFor="">
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
