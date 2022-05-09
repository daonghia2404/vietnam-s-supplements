import React, { useEffect } from 'react';

import BlogDetail from '@/containers/BlogDetail';
import { ETypeBlogDetail } from '@/containers/BlogDetail/BlogDetail.enums';

import './HandbookDetail.scss';
import { scrollToTop } from '@/utils/functions';

const HandbookDetail: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="HandbookDetail">
      <BlogDetail type={ETypeBlogDetail.HANDBOOK} />
    </div>
  );
};

export default HandbookDetail;
