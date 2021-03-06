import React from 'react';
import { useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';
import { copyText, showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import PageLoading from '@/components/PageLoading';

import './ReferralCode.scss';

const ReferralCode: React.FC = () => {
  const authState = useSelector((state: TRootState) => state.authReducer.user);
  const getInfoLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.GET_INFO]);

  const handleCopyCode = (): void => {
    copyText(authState?.referralCode);
    showNotification(ETypeNotification.SUCCESS, 'Sao chép mã giới thiệu thành công');
  };

  return (
    <div className="ReferralCode style-container">
      {getInfoLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Mã giới thiệu" />

          <div className="ReferralCode-main">
            <div className="ReferralCode-description">
              Chia sẻ mã giới thiệu của bạn cho bạn bè để nhận được những ưu đãi tốt nhất từ chúng tôi
            </div>
            <div className="ReferralCode-card">
              <div className="ReferralCode-card-main">
                <div className="ReferralCode-card-title">Mã giới thiệu của bạn</div>
                <div className="ReferralCode-card-code">{authState?.referralCode}</div>
              </div>
            </div>

            <div className="ReferralCode-copy flex justify-center">
              <Button title="Sao chép" shadow={false} iconName={EIconName.Duplicate} onClick={handleCopyCode} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReferralCode;
