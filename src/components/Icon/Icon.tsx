import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';
import './Icon.scss';

import Phone from './Phone';
import Lock from './Lock';
import Users from './Users';
import Camera from './Camera';
import Calendar from './Calendar';
import AngleRight from './AngleRight';
import Picture from './Picture';
import Search from './Search';
import Cart from './Cart';
import Bars from './Bars';
import UserSquare from './UserSquare';
import Edit from './Edit';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Wheel from './Wheel';
import Gift from './Gift';
import Info from './Info';
import Close from './Close';
import Medal from './Medal';
import CreditCard from './CreditCard';
import Gym from './Gym';
import Heart from './Heart';
import History from './History';
import User from './User';
import Duplicate from './Duplicate';
import Plus from './Plus';
import Quote from './Quote';
import MapMarker from './MapMarker';
import Mail from './Mail';
import LoadingSpin from './LoadingSpin';
import Logout from './Logout';
import Share from './Share';
import CloudDownload from './CloudDownload';
import Minus from './Minus';
import SearchSvg from './SearchSvg';
import Tiktok from './Tiktok';
import BookMark from './BookMark';

const Icon: React.FC<TIconProps> = ({ name, className, color, onClick }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.Lock:
        return <Lock color={color} />;
      case EIconName.Users:
        return <Users color={color} />;
      case EIconName.Picture:
        return <Picture color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.Camera:
        return <Camera color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.Cart:
        return <Cart color={color} />;
      case EIconName.Bars:
        return <Bars color={color} />;
      case EIconName.UserSquare:
        return <UserSquare color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Instagram:
        return <Instagram color={color} />;
      case EIconName.Edit:
        return <Edit color={color} />;
      case EIconName.Medal:
        return <Medal color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.Info:
        return <Info color={color} />;
      case EIconName.Gift:
        return <Gift color={color} />;
      case EIconName.Wheel:
        return <Wheel color={color} />;
      case EIconName.CreditCard:
        return <CreditCard color={color} />;
      case EIconName.Gym:
        return <Gym color={color} />;
      case EIconName.Heart:
        return <Heart color={color} />;
      case EIconName.History:
        return <History color={color} />;
      case EIconName.User:
        return <User color={color} />;
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.Duplicate:
        return <Duplicate color={color} />;
      case EIconName.Quote:
        return <Quote color={color} />;
      case EIconName.Mail:
        return <Mail color={color} />;
      case EIconName.MapMarker:
        return <MapMarker color={color} />;
      case EIconName.LoadingSpin:
        return <LoadingSpin color={color} />;
      case EIconName.Logout:
        return <Logout color={color} />;
      case EIconName.Share:
        return <Share color={color} />;
      case EIconName.CloudDownload:
        return <CloudDownload color={color} />;
      case EIconName.Minus:
        return <Minus color={color} />;
      case EIconName.SearchSvg:
        return <SearchSvg color={color} />;
      case EIconName.Tiktok:
        return <Tiktok color={color} />;
      case EIconName.BookMark:
        return <BookMark color={color} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
