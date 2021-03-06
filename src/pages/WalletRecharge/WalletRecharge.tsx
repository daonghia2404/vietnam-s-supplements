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
  // const handleOpenSuccessRechargeModal = (): void => {
  //   setSuccessRechargeModalState({ visible: true });
  // };
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
    window.open(response.paymentUrl, '_blank');
    // handleOpenSuccessRechargeModal();
  };

  const handleCreatePaymentFailed = (): void => {
    handleCloseConfirmRechargeModal();
    handleOpenFailedRechargeModal();
  };

  return (
    <div className="WalletRecharge style-container">
      <HeaderSkew title="N???p ti???n" />

      <div className="WalletRecharge-back flex items-center" onClick={handleNavigateWallet}>
        <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
        Quay l???i
      </div>
      <div className="WalletRecharge-main">
        <Form form={form} onFinish={handleSubmit}>
          <div className="WalletRecharge-badge flex items-start">
            <Icon name={EIconName.Info} color={EIconColor.WHITE} />
            B???n s??? thanh to??n b???ng c??ch chuy???n kho???n ho???c giao d???ch qua Appotapay v???i Vnsupplements
          </div>

          <div className="WalletRecharge-group">
            <Form.Item name="amount">
              <Input placeholder="Nh???p s??? ti???n" suffix="??" />
            </Form.Item>
          </div>

          <div className="WalletRecharge-group">
            {/* <div className="WalletRecharge-text bold">Ph????ng th???c thanh to??n</div>

            <Form.Item name="paymentMethod">
              <Select placeholder="Ph????ng th???c thanh to??n" />
            </Form.Item> */}

            {/* <div className="WalletRecharge-text bold">L??u ??</div>
            <div className="WalletRecharge-text gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div> */}

            <div className="WalletRecharge-submit flex justify-center">
              <Button type="primary" htmlType="submit" title="N???p ti???n" />
            </div>
          </div>
        </Form>
      </div>

      <Modal
        {...confirmRechargeModalState}
        onClose={handleCloseConfirmRechargeModal}
        cancelButton={{ title: 'Quay l???i', onClick: handleCloseConfirmRechargeModal, disabled: createPaymentLoading }}
        confirmButton={{ title: '?????ng ??', onClick: handleSubmitConfirmRechargeModal, loading: createPaymentLoading }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          N???p ti???n: {formatMoneyVND({ amount: confirmRechargeModalState?.data?.amount || 0, showSuffix: true })}
        </div>
        <div className="Modal-body-description">
          B???n c?? ch???c ch???n mu???n n???p{' '}
          <strong>{formatMoneyVND({ amount: confirmRechargeModalState?.data?.amount || 0, showSuffix: true })}</strong>{' '}
          v??o v?? VN Supplements thanh to??n qua ph????ng th???c <strong>Appotapay</strong> kh??ng?
        </div>
      </Modal>

      <Modal
        {...successRechargeModalState}
        onClose={handleCloseSuccessRechargeModal}
        confirmButton={{ title: '?????ng ??', onClick: handleSubmitSuccessRechargeModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          N???p ti???n th??nh c??ng
        </div>
        <div className="Modal-body-description">Th??ng tin n???p ti???n c???a b???n ???? ???????c qu???n tr??? vi??n x??t duy???t.</div>
      </Modal>

      <Modal
        {...failedRechargeModalState}
        onClose={handleCloseFailedRechargeModal}
        confirmButton={{ title: '?????ng ??', onClick: handleSubmitFailedRechargeModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          N???p ti???n kh??ng th??nh c??ng
        </div>
        <div className="Modal-body-description">C?? m???t s??? c??? ???? x???y ra. Vui l??ng th??? l???i sau</div>
      </Modal>
    </div>
  );
};

export default WalletRecharge;
