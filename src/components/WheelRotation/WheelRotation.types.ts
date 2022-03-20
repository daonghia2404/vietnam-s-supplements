export type TWheelRotationProps = {
  className?: string;
  dataGifts: TWheelRotationData[];
  triggerStart?: boolean;
  onFinish?: (data: TWheelRotationData) => void;
};

export type TWheelRotationData = {
  label: string;
  percent: number;
  index?: number;
};

export type TWheelRotationItemProps = {
  skewY: number;
  rotate: number;
  label: string;
  index: number;
};
