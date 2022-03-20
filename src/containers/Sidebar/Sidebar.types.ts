import React from 'react';

export type TSidebarProps = {
  className?: string;
  onClickMenuBars?: () => void;
};

export type TSidebarData = {
  key: string;
  title: string;
  link: string;
  subItems?: TSidebarData[];
  isSkew?: boolean;
  suffix?: string;
  icon?: React.ReactNode;
};
