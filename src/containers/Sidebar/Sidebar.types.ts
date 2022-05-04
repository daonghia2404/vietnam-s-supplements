import React from 'react';

export type TSidebarProps = {
  className?: string;
  isMobile?: boolean;
  onClickMenuBars?: (visible?: boolean) => void;
};

export type TSidebarData = {
  key: string;
  title: string;
  link?: string;
  isAction?: boolean;
  subItems?: TSidebarData[];
  isSkew?: boolean;
  suffix?: string;
  checkAuth?: boolean;
  notShowAuth?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
};
