import React from 'react';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Footer from '@/containers/Footer';

const Guest: React.FC<TGuestProps> = ({ children }) => {
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
