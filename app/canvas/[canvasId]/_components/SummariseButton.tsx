"use client";

import { summariseContentWithGemini } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";


export function SummariseButton({
  editor,
  canvasId,
}: {
  editor: any;
  canvasId: Id<"canvas">;
}) {
  const saveSummary = useMutation(api.canvas.saveSummary);

  const handleSummarise = async () => {
    if (!editor) return;

    const content = editor.getText();
    try {
      const summary = await summariseContentWithGemini(
        process.env.GOOGLE_GEMINI_API_KEY!,
        content
      );
      await saveSummary({ id: canvasId, summary });
      alert(summary);
      console.log("✅ Summary saved:", summary);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleSummarise}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Summarise
    </button>
  );
}
