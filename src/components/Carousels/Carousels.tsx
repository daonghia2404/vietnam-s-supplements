import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';

import { TCarouselsProps } from './Carousels.types';
import './Carousels.scss';

export const Carousels: React.FC<TCarouselsProps> = ({
  dots = true,
  arrows = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  autoplay,
  children,
}) => {
  const renderPrevArrow = (): React.ReactElement => {
    return <Button size="small" className="Carousels-arrow prev" shadow={false} iconName={EIconName.AngleRight} />;
  };

  const renderNextArrow = (): React.ReactElement => {
    return <Button size="small" className="Carousels-arrow next" shadow={false} iconName={EIconName.AngleRight} />;
  };
  const settings = {
    speed: 500,
    dots,
    arrows,
    infinite,
    autoplay,
    slidesPerRow,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll,
    nextArrow: renderNextArrow(),
    prevArrow: renderPrevArrow(),
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousels;
