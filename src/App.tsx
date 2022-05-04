import React, { useEffect, useState } from 'react';
import { Redirect, Router } from '@reach/router';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';
import Sidebar from '@/containers/Sidebar/Sidebar';
import Profile from '@/layouts/Profile';
import { getInfoAction, uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';
import Header from '@/containers/Header/Header';
import AuthHelpers from '@/services/helpers';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  const deviceType = useSelector((state: TRootState) => state.uiReducer.device.type);
  const atk = AuthHelpers.getAccessToken();

  const handleToggleVisibleSidebar = (visible?: boolean): void => {
    setVisibleSidebar(typeof visible !== 'undefined' ? visible : !visibleSidebar);
  };

  useEffect(() => {
    setVisibleSidebar(deviceType === EDeviceType.DESKTOP);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceType]);

  useEffect(() => {
    const updateSize = (): void => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  useEffect(() => {
    if (atk) dispatch(getInfoAction.request());
  }, [dispatch, atk]);

  return (
    <div className={classNames('App', { 'hide': !visibleSidebar }, deviceType)}>
      {deviceType === EDeviceType.MOBILE && (
        <div className="App-header">
          <Header />
        </div>
      )}

      <div className="App-sidebar">
        <Sidebar onClickMenuBars={handleToggleVisibleSidebar} isMobile={deviceType === EDeviceType.MOBILE} />
      </div>

      <div className="App-body">
        <Router primary={false}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <PublicRoute path={Paths.AboutUs} component={Pages.AboutUs} />
            <PublicRoute path={Paths.PolicyProduct} component={Pages.PolicyProduct} />
            <PublicRoute path={Paths.PolicyReturn} component={Pages.PolicyReturn} />
            <PublicRoute path={Paths.PolicyInformation} component={Pages.PolicyInformation} />
            <PublicRoute path={Paths.PolicyDuty} component={Pages.PolicyDuty} />
            <PublicRoute path={Paths.PolicyShipping} component={Pages.PolicyShipping} />
            <PublicRoute path={Paths.Contact} component={Pages.Contact} />
            <PublicRoute path={Paths.Handbooks} component={Pages.Handbooks} />
            <PublicRoute path={Paths.News} component={Pages.News} />
            <PublicRoute path={Paths.Carts} component={Pages.Carts} />
            <PublicRoute path={Paths.Checkout} component={Pages.Checkout} />
            <PublicRoute path={Paths.ProductSearch} component={Pages.ProductSearch} />
            <PublicRoute path={Paths.HandbookDetail()} component={Pages.HandbookDetail} />
            <PublicRoute path={Paths.NewDetail()} component={Pages.NewDetail} />
            <PublicRoute path={Paths.Category()} component={Pages.Category} />
            <PublicRoute path={Paths.Product()} component={Pages.Product} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
          </Guest>

          <Auth path={LayoutPaths.Auth}>
            <AuthRoute path={Paths.Login} component={Pages.Login} />
            <PublicRoute path={Paths.Register} component={Pages.Register} />
            <PublicRoute path={Paths.AccountVerification} component={Pages.AccountVerification} />
            <PublicRoute path={Paths.ForgotPassword} component={Pages.ForgotPassword} />
            <PublicRoute path={Paths.ChangePasswordCode} component={Pages.ChangePasswordCode} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
          </Auth>

          <Admin path={LayoutPaths.Admin}>
            <ProtectedRoute path={Paths.Wheels} component={Pages.Wheels} />
            <ProtectedRoute path={Paths.WheelDetail()} component={Pages.WheelDetail} />
            <ProtectedRoute path={Paths.MealSchedule} component={Pages.MealSchedule} />
            <ProtectedRoute path={Paths.MealScheduleConfig} component={Pages.MealScheduleConfig} />

            <PublicRoute path={Paths.Exercise} component={Pages.Exercise} />
            <PublicRoute path={Paths.ExerciseDetail()} component={Pages.ExerciseDetail} />

            <PublicRoute path={Paths.ExerciseOnline} component={Pages.ExerciseOnline} />
            <PublicRoute path={Paths.ExerciseOnlineDetail()} component={Pages.ExerciseOnlineDetail} />

            {/* <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} /> */}
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Profile}${Paths.ProfileInformation}`} />
          </Admin>

          <Profile path={LayoutPaths.Profile}>
            <ProtectedRoute path={Paths.HistoryRotation} component={Pages.HistoryRotation} />
            <ProtectedRoute path={Paths.ProfileInformation} component={Pages.ProfileInformation} />
            <ProtectedRoute path={Paths.ChangePasswordAccount} component={Pages.ChangePasswordAccount} />
            <ProtectedRoute path={Paths.ReferralCode} component={Pages.ReferralCode} />
            <ProtectedRoute path={Paths.ExerciseBought} component={Pages.ExerciseBought} />
            <ProtectedRoute path={Paths.Wallet} component={Pages.Wallet} />
            <ProtectedRoute path={Paths.WalletRecharge} component={Pages.WalletRecharge} />
            <ProtectedRoute path={Paths.WalletDetail()} component={Pages.WalletDetail} />
            <ProtectedRoute path={Paths.WalletRechargeResult} component={Pages.WalletRechargeResult} />
            <ProtectedRoute path={Paths.Rank} component={Pages.Rank} />
            <ProtectedRoute path={Paths.FavoriteProducts} component={Pages.FavoriteProducts} />
            <ProtectedRoute path={Paths.Cart} component={Pages.Cart} />
            <ProtectedRoute path={Paths.CartDetail()} component={Pages.CartDetail} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Profile}${Paths.ProfileInformation}`} />
          </Profile>
        </Router>
      </div>
    </div>
  );
};

export default App;
