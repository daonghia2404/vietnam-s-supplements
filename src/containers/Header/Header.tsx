import React from 'react';
import { Link } from '@reach/router';

import Logo from '@/assets/images/logo.png';
import { Paths } from '@/pages/routers';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header flex justify-center">
      <Link to={Paths.Home}>
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};
export default Header;
