export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Rectangle,
  Ellipse,
  Note,
  Path,
  Text,
  Triangle,
  Hexagon,
  Line,
  Diamond,
  Star,
  Arrow,
}

export type RectangleLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type TriangleLayer = {
  type: LayerType.Triangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
};

export type HexagonLayer = {
  type: LayerType.Hexagon;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
};

export type LineLayer = {
  type: LayerType.Line;
  x: number;
  y: number;
  x2: number;
  y2: number;
  stroke: Color;
};

export type DiamondLayer = {
  type: LayerType.Diamond;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
};

export type StarLayer = {
  type: LayerType.Star;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
};

export type ArrowLayer = {
  type: LayerType.Arrow;
  x: number;
  y: number;
  x2: number;
  y2: number;
  stroke: Color;
};

export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  points: number[][];
  value?: string;
};

export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type NoteLayer = {
  type: LayerType.Note;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note
        | LayerType.Triangle
        | LayerType.Hexagon
        | LayerType.Line
        | LayerType.Diamond
        | LayerType.Star
        | LayerType.Arrow;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      corner: Side;
    }
  | {
      mode: CanvasMode.Pencil;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Inserting,
  Resizing,
  Pencil,
  Translating,
}

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | NoteLayer
  | TextLayer
  | TriangleLayer
  | HexagonLayer
  | LineLayer
  | DiamondLayer
  | StarLayer
  | ArrowLayer;
