import React, { useEffect } from 'react';

import BlogDetail from '@/containers/BlogDetail';
import { ETypeBlogDetail } from '@/containers/BlogDetail/BlogDetail.enums';
import { scrollToTop } from '@/utils/functions';

import './NewDetail.scss';

const NewDetail: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="NewDetail">
      <BlogDetail type={ETypeBlogDetail.NEW} />
    </div>
  );
};

export default NewDetail;
