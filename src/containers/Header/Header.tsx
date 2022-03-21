import React from 'react';

import Logo from '@/assets/images/logo.png';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header flex justify-center">
      <img src={Logo} alt="" />
    </div>
  );
};
export default Header;
