// "use client";
// import { toPng } from "html-to-image";

// export async function captureCanvas(
//   nodeId: string,
//   rect: { x: number; y: number; width: number; height: number }
// ): Promise<string | null> {
//   const node = document.getElementById(nodeId);
//   if (!node) return null;

//   try {
//     const nodeRect = node.getBoundingClientRect(); // 👈 position & size of canvas in viewport

//     // Convert selection rect (viewport) → relative to node
//     const sx = rect.x - nodeRect.left;
//     const sy = rect.y - nodeRect.top;
//     const sw = rect.width;
//     const sh = rect.height;

//     // Safety clamp
//     if (sw <= 0 || sh <= 0) {
//       console.warn("[captureCanvas] invalid rect:", rect);
//       return null;
//     }

//     const dataUrl = await toPng(node, { cacheBust: true });
//     const img = new Image();
//     img.src = dataUrl;

//     return new Promise((resolve) => {
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d")!;
//         canvas.width = sw;
//         canvas.height = sh;

//         ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

//         resolve(canvas.toDataURL("image/png"));
//       };
//       img.onerror = (err) => {
//         console.error("[captureCanvas] image load failed", err);
//         resolve(null);
//       };
//     });
//   } catch (err) {
//     console.error("Failed to capture canvas:", err);
//     return null;
//   }
// }

"use client";
import { toPng } from "html-to-image";

export async function captureCanvas(nodeId: string): Promise<string | null> {
  const node = document.getElementById(nodeId);
  if (!node) {
    console.error("[captureCanvas] element not found:", nodeId);
    return null;
  }

  try {
    // Directly render the whole node to PNG
    const dataUrl = await toPng(node, {
      cacheBust: true,
      backgroundColor: "#FDF8F6", 
     
    });
    return dataUrl;
  } catch (err) {
    console.error("Failed to capture canvas:", err);
    return null;
  }
}

