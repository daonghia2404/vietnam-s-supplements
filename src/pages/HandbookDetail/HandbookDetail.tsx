import React from 'react';

import BlogDetail from '@/containers/BlogDetail';
import { ETypeBlogDetail } from '@/containers/BlogDetail/BlogDetail.enums';

import './HandbookDetail.scss';

const HandbookDetail: React.FC = () => {
  return (
    <div className="HandbookDetail">
      <BlogDetail type={ETypeBlogDetail.HANDBOOK} />
    </div>
  );
};

export default HandbookDetail;
