import React from 'react';

import BlogDetail from '@/containers/BlogDetail';
import { ETypeBlogDetail } from '@/containers/BlogDetail/BlogDetail.enums';

import './NewDetail.scss';

const NewDetail: React.FC = () => {
  return (
    <div className="NewDetail">
      <BlogDetail type={ETypeBlogDetail.HANDBOOK} />
    </div>
  );
};

export default NewDetail;
