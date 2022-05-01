import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Footer from '@/containers/Footer';
import { getBannersAction } from '@/redux/actions';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  const dispatch = useDispatch();

  const getBannersData = useCallback(() => {
    dispatch(getBannersAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="Guest">
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
