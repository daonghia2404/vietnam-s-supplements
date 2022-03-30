import React from 'react';

export type TSidebarProps = {
  className?: string;
  isMobile?: boolean;
  onClickMenuBars?: () => void;
};

export type TSidebarData = {
  key: string;
  title: string;
  link?: string;
  isAction?: boolean;
  subItems?: TSidebarData[];
  isSkew?: boolean;
  suffix?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};
