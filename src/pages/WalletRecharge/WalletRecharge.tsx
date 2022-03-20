import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Form } from 'antd';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';

import './WalletRecharge.scss';
import Modal from '@/components/Modal';

const WalletRecharge: React.FC = () => {
  const [form] = Form.useForm();

  const [confirmRechargeModalState, setConfirmRechargeModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [successRechargeModalState, setSuccessRechargeModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenConfirmRechargeModal = (): void => {
    setConfirmRechargeModalState({ visible: true });
  };
  const handleCloseConfirmRechargeModal = (): void => {
    setConfirmRechargeModalState({ visible: false });
  };
  const handleSubmitConfirmRechargeModal = (): void => {
    handleCloseConfirmRechargeModal();
    handleOpenSuccessRechargeModal();
  };
  const handleOpenSuccessRechargeModal = (): void => {
    setSuccessRechargeModalState({ visible: true });
  };
  const handleCloseSuccessRechargeModal = (): void => {
    setSuccessRechargeModalState({ visible: false });
  };
  const handleSubmitSuccessRechargeModal = (): void => {
    handleCloseSuccessRechargeModal();
  };

  const handleNavigateWallet = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
  };

  return (
    <div className="WalletRecharge style-container">
      <HeaderSkew title="Nạp tiền" />

      <div className="WalletRecharge-back flex items-center" onClick={handleNavigateWallet}>
        <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
        Quay lại
      </div>
      <div className="WalletRecharge-main">
        <Form form={form}>
          <div className="WalletRecharge-badge flex items-start">
            <Icon name={EIconName.Info} color={EIconColor.WHITE} />
            Bạn sẽ thanh toán bằng cách chuyển khoản hoặc giao dịch VNpay với Vnsupplements
          </div>

          <div className="WalletRecharge-group">
            <Form.Item name="value">
              <Input placeholder="Nhập số tiền" suffix="đ" />
            </Form.Item>
          </div>

          <div className="WalletRecharge-group">
            <div className="WalletRecharge-text bold">Phương thức thanh toán</div>

            <Form.Item name="value">
              <Select placeholder="Phương thức thanh toán" />
            </Form.Item>

            <div className="WalletRecharge-text bold">Lưu ý</div>
            <div className="WalletRecharge-text gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div>

            <div className="WalletRecharge-submit flex justify-center">
              <Button type="primary" htmlType="submit" title="Nạp tiền" onClick={handleOpenConfirmRechargeModal} />
            </div>
          </div>
        </Form>
      </div>

      <Modal
        {...confirmRechargeModalState}
        onClose={handleCloseConfirmRechargeModal}
        cancelButton={{ title: 'Quay lại', onClick: handleCloseConfirmRechargeModal }}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitConfirmRechargeModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Nạp tiền: 300.000đ
        </div>
        <div className="Modal-body-description">
          Bạn có chắc chắn muốn nạp 300.000đ vào ví VN Supplements thanh toán qua phương thức VNPay không?
        </div>
      </Modal>

      <Modal
        {...successRechargeModalState}
        onClose={handleCloseSuccessRechargeModal}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitSuccessRechargeModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Nạp tiền thành công
        </div>
        <div className="Modal-body-description">Thông tin nạp tiền của bạn đang được quản trị viên xét duyêt.</div>
      </Modal>
    </div>
  );
};

export default WalletRecharge;
