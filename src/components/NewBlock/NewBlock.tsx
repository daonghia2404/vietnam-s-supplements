import React from 'react';
import { navigate } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { renderUrlShareSocial } from '@/utils/functions';

import { TNewBlockProps } from './NewBlock.types';
import './NewBlock.scss';

const NewBlock: React.FC<TNewBlockProps> = ({ url, image, title, description }) => {
  const handleNavigateDetail = (): void => {
    if (url) navigate(url);
  };

  return (
    <div className="NewBlock">
      <div className="NewBlock-image" onClick={handleNavigateDetail}>
        <img src={image} alt="" />
      </div>
      <div className="NewBlock-info">
        <div className="NewBlock-title" onClick={handleNavigateDetail}>
          {title}
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="NewBlock-description" dangerouslySetInnerHTML={{ __html: description }} />
        <a href={renderUrlShareSocial(url || '', title)} className="NewBlock-share flex items-center">
          <Icon name={EIconName.Share} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
          Chia sẻ
        </a>
      </div>
    </div>
  );
};

export default NewBlock;
