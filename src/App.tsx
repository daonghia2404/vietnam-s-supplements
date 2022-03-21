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
import { uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';

import './App.scss';
import Header from '@/containers/Header/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  const deviceType = useSelector((state: TRootState) => state.uiReducer.device.type);

  const handleToggleVisibleSidebar = (): void => {
    setVisibleSidebar(!visibleSidebar);
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

  return (
    <div className={classNames('App', { 'hide': !visibleSidebar }, deviceType)}>
      {deviceType === EDeviceType.MOBILE && (
        <div className="App-header">
          <Header />
        </div>
      )}

      <div className="App-sidebar">
        <Sidebar onClickMenuBars={handleToggleVisibleSidebar} />
      </div>

      <div className="App-body">
        <Router primary={false}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <PublicRoute path={Paths.ListPage} component={Pages.ListPage} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
          </Guest>

          <Auth path={LayoutPaths.Auth}>
            <PublicRoute path={Paths.Login} component={Pages.Login} />
            <PublicRoute path={Paths.Register} component={Pages.Register} />
            <PublicRoute path={Paths.AccountVerification} component={Pages.AccountVerification} />
            <PublicRoute path={Paths.ForgotPassword} component={Pages.ForgotPassword} />
            <PublicRoute path={Paths.ChangePasswordCode} component={Pages.ChangePasswordCode} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
          </Auth>

          <Admin path={LayoutPaths.Admin}>
            <PublicRoute path={Paths.UpdateProfile} component={Pages.UpdateProfile} />

            <PublicRoute path={Paths.Wheels} component={Pages.Wheels} />
            <PublicRoute path={Paths.WheelDetail()} component={Pages.WheelDetail} />

            <PublicRoute path={Paths.MealSchedule} component={Pages.MealSchedule} />
            <PublicRoute path={Paths.MealScheduleConfig} component={Pages.MealScheduleConfig} />

            <PublicRoute path={Paths.Exercise} component={Pages.Exercise} />
            <PublicRoute path={Paths.ExerciseDetail()} component={Pages.ExerciseDetail} />

            <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Dashboard}`} />
          </Admin>

          <Profile path={LayoutPaths.Profile}>
            <PublicRoute path={Paths.ProfileInformation} component={Pages.ProfileInformation} />
            <PublicRoute path={Paths.Cart} component={Pages.Cart} />
            <PublicRoute path={Paths.CartDetail()} component={Pages.CartDetail} />
            <PublicRoute path={Paths.Rank} component={Pages.Rank} />
            <PublicRoute path={Paths.FavoriteProducts} component={Pages.FavoriteProducts} />
            <PublicRoute path={Paths.ReferralCode} component={Pages.ReferralCode} />
            <PublicRoute path={Paths.ChangePasswordAccount} component={Pages.ChangePasswordAccount} />
            <PublicRoute path={Paths.HistoryRotation} component={Pages.HistoryRotation} />
            <PublicRoute path={Paths.Wallet} component={Pages.Wallet} />
            <PublicRoute path={Paths.WalletRecharge} component={Pages.WalletRecharge} />
            <PublicRoute path={Paths.WalletDetail()} component={Pages.WalletDetail} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Dashboard}`} />
          </Profile>
        </Router>
      </div>
    </div>
  );
};

export default App;
