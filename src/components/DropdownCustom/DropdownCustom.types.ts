import React from 'react';

export type TDropdownCustomProps = {
  className?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactElement;
  visible?: boolean;
  overlayClassName?: string;
  onVisibleChange?: (visible: boolean) => void;
};
