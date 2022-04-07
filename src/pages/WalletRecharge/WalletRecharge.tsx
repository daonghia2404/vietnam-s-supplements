import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { createPaymentAction } from '@/redux/actions';
import { formatMoneyVND } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import { TBodyCreatePayment, TCreatePaymentResponse } from '@/services/api/payment-controller/types';

import './WalletRecharge.scss';

const WalletRecharge: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const createPaymentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPaymentControllerAction.CREATE_PAYMENT],
  );

  const [confirmRechargeModalState, setConfirmRechargeModalState] = useState<{
    visible: boolean;
    data?: TBodyCreatePayment;
  }>({
    visible: false,
  });

  const [successRechargeModalState, setSuccessRechargeModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [failedRechargeModalState, setFailedRechargeModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenConfirmRechargeModal = (data: TBodyCreatePayment): void => {
    setConfirmRechargeModalState({ visible: true, data });
  };
  const handleCloseConfirmRechargeModal = (): void => {
    setConfirmRechargeModalState({ visible: false });
  };
  const handleSubmitConfirmRechargeModal = (): void => {
    if (confirmRechargeModalState?.data)
      dispatch(
        createPaymentAction.request(
          confirmRechargeModalState.data,
          handleCreatePaymentSuccess,
          handleCreatePaymentFailed,
        ),
      );
  };
  const handleOpenSuccessRechargeModal = (): void => {
    setSuccessRechargeModalState({ visible: true });
  };
  const handleCloseSuccessRechargeModal = (): void => {
    setSuccessRechargeModalState({ visible: false });
  };
  const handleSubmitSuccessRechargeModal = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
    handleCloseSuccessRechargeModal();
  };
  const handleOpenFailedRechargeModal = (): void => {
    setFailedRechargeModalState({ visible: true });
  };
  const handleCloseFailedRechargeModal = (): void => {
    setFailedRechargeModalState({ visible: false });
  };
  const handleSubmitFailedRechargeModal = (): void => {
    handleCloseFailedRechargeModal();
  };

  const handleNavigateWallet = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      amount: values.amount,
      bankCode: undefined,
      extraData: undefined,
      paymentMethod: undefined,
    };
    handleOpenConfirmRechargeModal(body);
  };

  const handleCreatePaymentSuccess = (response: TCreatePaymentResponse): void => {
    handleCloseConfirmRechargeModal();
    window.open(response.paymentUrl, 'blank');
    // handleOpenSuccessRechargeModal();
  };

  const handleCreatePaymentFailed = (): void => {
    handleCloseConfirmRechargeModal();
    handleOpenFailedRechargeModal();
  };

  return (
    <div className="WalletRecharge style-container">
      <HeaderSkew title="Nạp tiền" />

      <div className="WalletRecharge-back flex items-center" onClick={handleNavigateWallet}>
        <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
        Quay lại
      </div>
      <div className="WalletRecharge-main">
        <Form form={form} onFinish={handleSubmit}>
          <div className="WalletRecharge-badge flex items-start">
            <Icon name={EIconName.Info} color={EIconColor.WHITE} />
            Bạn sẽ thanh toán bằng cách chuyển khoản hoặc giao dịch qua Appotapay với Vnsupplements
          </div>

          <div className="WalletRecharge-group">
            <Form.Item name="amount">
              <Input placeholder="Nhập số tiền" suffix="đ" />
            </Form.Item>
          </div>

          <div className="WalletRecharge-group">
            {/* <div className="WalletRecharge-text bold">Phương thức thanh toán</div>

            <Form.Item name="paymentMethod">
              <Select placeholder="Phương thức thanh toán" />
            </Form.Item> */}

            <div className="WalletRecharge-text bold">Lưu ý</div>
            <div className="WalletRecharge-text gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div>

            <div className="WalletRecharge-submit flex justify-center">
              <Button type="primary" htmlType="submit" title="Nạp tiền" />
            </div>
          </div>
        </Form>
      </div>

      <Modal
        {...confirmRechargeModalState}
        onClose={handleCloseConfirmRechargeModal}
        cancelButton={{ title: 'Quay lại', onClick: handleCloseConfirmRechargeModal, disabled: createPaymentLoading }}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitConfirmRechargeModal, loading: createPaymentLoading }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Nạp tiền: {formatMoneyVND({ amount: confirmRechargeModalState?.data?.amount || 0, showSuffix: true })}
        </div>
        <div className="Modal-body-description">
          Bạn có chắc chắn muốn nạp{' '}
          <strong>{formatMoneyVND({ amount: confirmRechargeModalState?.data?.amount || 0, showSuffix: true })}</strong>{' '}
          vào ví VN Supplements thanh toán qua phương thức <strong>{`{{PHUONG_THUC}}`}</strong> không?
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
        <div className="Modal-body-description">Thông tin nạp tiền của bạn đã được quản trị viên xét duyệt.</div>
      </Modal>

      <Modal
        {...failedRechargeModalState}
        onClose={handleCloseFailedRechargeModal}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitFailedRechargeModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Nạp tiền không thành công
        </div>
        <div className="Modal-body-description">Có một sự cố đã xảy ra. Vui lòng thử lại sau</div>
      </Modal>
    </div>
  );
};

export default WalletRecharge;
