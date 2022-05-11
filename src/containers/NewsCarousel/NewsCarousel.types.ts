import { ENewsCarouselType } from '@/containers/NewsCarousel/NewsCarousel.enums';

export type TNewsCarouselProps = {
  data?: {
    id: string;
    image: string;
    title: string;
    description: string;
    shareUrl: string;
  }[];
  type: ENewsCarouselType;
};
