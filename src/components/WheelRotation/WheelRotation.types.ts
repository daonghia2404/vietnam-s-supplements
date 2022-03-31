import { TPrizesResponse } from '@/services/api/wheel-controller/types';

export type TWheelRotationProps = {
  className?: string;
  dataGifts: TWheelRotationData[];
  dataGift?: TPrizesResponse;
  triggerStart?: boolean;
  random?: boolean;
  onFinish?: (data: TWheelRotationData) => void;
};

export type TWheelRotationData = {
  id: string;
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
