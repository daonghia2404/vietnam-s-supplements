import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import { TModalProps } from '@/components/Modal/Modal.types';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Modal.scss';

const Modal: React.FC<TModalProps> = ({
  onClose,
  onSubmit,
  visible,
  cancelButton,
  confirmButton,
  centered,
  width = '38.5rem',
  wrapClassName,
  className,
  closeable,
  hideFooter,
  children,
}) => {
  return (
    <AntdModal
      footer={null}
      title={null}
      closable={false}
      visible={visible}
      width={width}
      centered={centered}
      onCancel={onClose}
      wrapClassName={classNames('Modal-wrap', wrapClassName)}
      className={classNames('Modal', className)}
    >
      {closeable && (
        <div className="Modal-close" onClick={onClose}>
          <Icon name={EIconName.Close} color={EIconColor.BOULDER} />
        </div>
      )}

      <div className="Modal-body">{children}</div>

      {!hideFooter && (
        <div
          className={classNames('Modal-footer flex justify-between', {
            single: (confirmButton && !cancelButton) || (!confirmButton && cancelButton),
          })}
        >
          {cancelButton && <Button type="ghost" onClick={onClose} {...cancelButton} />}
          {confirmButton && <Button type="primary" onClick={onSubmit} {...confirmButton} />}
        </div>
      )}
    </AntdModal>
  );
};

export default Modal;
