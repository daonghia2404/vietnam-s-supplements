import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import authHelpers from '@/services/helpers';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));
const Register = lazy(() => retryLoadComponent(() => import('@/pages/Register')));
const AccountVerification = lazy(() => retryLoadComponent(() => import('@/pages/AccountVerification')));
const ForgotPassword = lazy(() => retryLoadComponent(() => import('@/pages/ForgotPassword')));
const ChangePasswordCode = lazy(() => retryLoadComponent(() => import('@/pages/ChangePasswordCode')));
const ChangePasswordAccount = lazy(() => retryLoadComponent(() => import('@/pages/ChangePasswordAccount')));

const UpdateProfile = lazy(() => retryLoadComponent(() => import('@/pages/UpdateProfile')));

const Wheels = lazy(() => retryLoadComponent(() => import('@/pages/Wheels')));
const WheelDetail = lazy(() => retryLoadComponent(() => import('@/pages/WheelDetail')));

const MealSchedule = lazy(() => retryLoadComponent(() => import('@/pages/MealSchedule')));
const MealScheduleConfig = lazy(() => retryLoadComponent(() => import('@/pages/MealScheduleConfig')));

const Exercise = lazy(() => retryLoadComponent(() => import('@/pages/Exercise')));
const ExerciseDetail = lazy(() => retryLoadComponent(() => import('@/pages/ExerciseDetail')));

const ProfileInformation = lazy(() => retryLoadComponent(() => import('@/pages/ProfileInformation')));

const Cart = lazy(() => retryLoadComponent(() => import('@/pages/Cart')));
const CartDetail = lazy(() => retryLoadComponent(() => import('@/pages/CartDetail')));

const Rank = lazy(() => retryLoadComponent(() => import('@/pages/Rank')));

const FavoriteProducts = lazy(() => retryLoadComponent(() => import('@/pages/FavoriteProducts')));

const ReferralCode = lazy(() => retryLoadComponent(() => import('@/pages/ReferralCode')));

const HistoryRotation = lazy(() => retryLoadComponent(() => import('@/pages/HistoryRotation')));

const Wallet = lazy(() => retryLoadComponent(() => import('@/pages/Wallet')));
const WalletDetail = lazy(() => retryLoadComponent(() => import('@/pages/WalletDetail')));
const WalletRecharge = lazy(() => retryLoadComponent(() => import('@/pages/WalletRecharge')));

const ListPage = lazy(() => retryLoadComponent(() => import('@/pages/ListPage')));

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/xac-thuc',
  Admin: '/quan-ly',
  Profile: '/thong-tin',
};

export const ModulePaths = {
  Wheels: '/vong-quay',
  MealSchedule: '/lich-an-uong',
  Exercise: '/goi-tap',
  Cart: '/don-hang',
  Rank: '/hang-tai-khoan',
  Wallet: '/vi-cua-toi',
};

export const Paths = {
  Login: '/',
  Register: '/dang-ky',
  AccountVerification: '/tai-khoan',
  ForgotPassword: '/quen-mat-khau',
  ChangePasswordCode: '/thay-doi-mat-khau',
  ChangePasswordAccount: '/thay-doi-mat-khau',

  UpdateProfile: '/cap-nhat-thong-tin',

  Wheels: ModulePaths.Wheels,
  WheelDetail: (id?: string): string => `${ModulePaths.Wheels}/chi-tiet/${id || ':id'}`,

  MealSchedule: ModulePaths.MealSchedule,
  MealScheduleConfig: `${ModulePaths.MealSchedule}/thiet-lap`,

  Exercise: ModulePaths.Exercise,
  ExerciseDetail: (id?: string): string => `${ModulePaths.Exercise}/chi-tiet/${id || ':id'}`,

  ProfileInformation: '/ca-nhan',

  Cart: ModulePaths.Cart,
  CartDetail: (id?: string): string => `${ModulePaths.Cart}/chi-tiet/${id || ':id'}`,

  Rank: ModulePaths.Rank,

  FavoriteProducts: '/san-pham-yeu-thich',

  ReferralCode: '/ma-gioi-thieu',

  HistoryRotation: '/lich-su-vong-quay',

  Wallet: ModulePaths.Wallet,
  WalletRecharge: `${ModulePaths.Wallet}/nap-tien`,
  WalletDetail: (id?: string): string => `${ModulePaths.Wallet}/chi-tiet/${id || ':id'}`,

  Home: '/',
  Dashboard: '/',

  ListPage: '/danh-sach',

  Rest: '*',
};

export const Pages = {
  Login,
  Register,
  AccountVerification,
  ForgotPassword,
  ChangePasswordCode,
  ChangePasswordAccount,

  UpdateProfile,

  Wheels,
  WheelDetail,

  MealSchedule,
  MealScheduleConfig,

  Exercise,
  ExerciseDetail,

  ProfileInformation,

  Cart,
  CartDetail,

  Rank,

  FavoriteProducts,

  ReferralCode,

  HistoryRotation,

  Wallet,
  WalletRecharge,
  WalletDetail,

  Home,
  Dashboard,

  ListPage,
};

interface IRouteProps extends RouteComponentProps {
  component: React.FC;
}

export const AuthRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = authHelpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<div className="DOM-loading" />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = authHelpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<div className="DOM-loading" />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<div className="DOM-loading" />}>
    <Component {...rest} />
  </Suspense>
);
