import { shallow } from "@liveblocks/react";
import { Layer, XYWH, LayerType } from "@/types/canvas";
import { useSelf, useStorage } from "@/liveblocks.config";

const boundingBox = (layers: Layer[]): XYWH | null => {
  const first = layers[0];
  if (!first) return null;

  // helper function to normalize any layer into x,y,width,height
  const getBounds = (layer: Layer) => {
    switch (layer.type) {
      case LayerType.Line:
      case LayerType.Arrow: {
        const left = Math.min(layer.x, layer.x2);
        const top = Math.min(layer.y, layer.y2);
        const width = Math.abs(layer.x2 - layer.x);
        const height = Math.abs(layer.y2 - layer.y);
        return { x: left, y: top, width, height };
      }
      default: {
        // all other layers already have width + height
        return {
          x: layer.x,
          y: layer.y,
          width: (layer as any).width ?? 0,
          height: (layer as any).height ?? 0,
        };
      }
    }
  };

  let { x: left, y: top, width, height } = getBounds(first);
  let right = left + width;
  let bottom = top + height;

  for (let i = 1; i < layers.length; i++) {
    const { x, y, width, height } = getBounds(layers[i]);
    left = Math.min(left, x);
    right = Math.max(right, x + width);
    top = Math.min(top, y);
    bottom = Math.max(bottom, y + height);
  }

  return { x: left, y: top, width: right - left, height: bottom - top };
};

export const useSelectionBounds = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useStorage((root) => {
    const selectedLayers = selection
      .map((layerId) => root.layers.get(layerId)!)
      .filter(Boolean);

    return boundingBox(selectedLayers);
  }, shallow);
};
