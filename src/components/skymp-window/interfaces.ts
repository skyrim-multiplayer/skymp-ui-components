export interface WindowNodes {
  logo?: React.ReactElement;
  header?: React.ReactElement;
  content: React.ReactElement;
  footer?: React.ReactElement;
}

export type TWindowGradient =
  | React.ReactElement<React.SVGProps<SVGLinearGradientElement>>
  | React.ReactElement<React.SVGProps<SVGRadialGradientElement>>
  | React.ReactElement<React.SVGProps<SVGGradientElement>>;

export interface WindowSizePosition {
  top?: number;
  left?: number;

  width?: number;
  height?: number;

  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;

  scale?: number;
}
