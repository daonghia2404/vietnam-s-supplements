import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import authHelpers from '@/services/helpers';
import PageLoading from '@/components/PageLoading';

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
const ExerciseBought = lazy(() => retryLoadComponent(() => import('@/pages/ExerciseBought')));
const ExerciseDetail = lazy(() => retryLoadComponent(() => import('@/pages/ExerciseDetail')));

const ExerciseOnline = lazy(() => retryLoadComponent(() => import('@/pages/ExerciseOnline')));
const ExerciseOnlineDetail = lazy(() => retryLoadComponent(() => import('@/pages/ExerciseOnlineDetail')));

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
const WalletRechargeResult = lazy(() => retryLoadComponent(() => import('@/pages/WalletRechargeResult')));

const ListPage = lazy(() => retryLoadComponent(() => import('@/pages/ListPage')));

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const AboutUs = lazy(() => retryLoadComponent(() => import('@/pages/AboutUs')));
const PolicyProduct = lazy(() => retryLoadComponent(() => import('@/pages/PolicyProduct')));
const PolicyReturn = lazy(() => retryLoadComponent(() => import('@/pages/PolicyReturn')));
const PolicyDuty = lazy(() => retryLoadComponent(() => import('@/pages/PolicyDuty')));
const PolicyShipping = lazy(() => retryLoadComponent(() => import('@/pages/PolicyShipping')));
const PolicyInformation = lazy(() => retryLoadComponent(() => import('@/pages/PolicyInformation')));
const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));
const Contact = lazy(() => retryLoadComponent(() => import('@/pages/Contact')));
const Handbooks = lazy(() => retryLoadComponent(() => import('@/pages/Handbooks')));
const News = lazy(() => retryLoadComponent(() => import('@/pages/News')));
const HandbookDetail = lazy(() => retryLoadComponent(() => import('@/pages/HandbookDetail')));
const NewDetail = lazy(() => retryLoadComponent(() => import('@/pages/NewDetail')));
const Category = lazy(() => retryLoadComponent(() => import('@/pages/Category')));
const Categorys = lazy(() => retryLoadComponent(() => import('@/pages/Categorys')));
const Product = lazy(() => retryLoadComponent(() => import('@/pages/Product')));
const Carts = lazy(() => retryLoadComponent(() => import('@/pages/Carts')));
const CartsNotLogin = lazy(() => retryLoadComponent(() => import('@/pages/CartsNotLogin')));
const Checkout = lazy(() => retryLoadComponent(() => import('@/pages/Checkout')));
const ProductSearch = lazy(() => retryLoadComponent(() => import('@/pages/ProductSearch')));

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
  ExerciseOnline: '/pt-online',
  Cart: '/don-hang',
  Rank: '/hang-tai-khoan',
  Wallet: '/vi-cua-toi',
  Carts: '/gio-hang',
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
  ExerciseBought: `${ModulePaths.Exercise}/da-mua`,
  ExerciseDetail: (id?: string): string => `${ModulePaths.Exercise}/chi-tiet/${id || ':id'}`,

  ExerciseOnline: ModulePaths.ExerciseOnline,
  ExerciseOnlineDetail: (id?: string): string => `${ModulePaths.ExerciseOnline}/chi-tiet/${id || ':id'}`,

  ProfileInformation: '/ca-nhan',

  Cart: ModulePaths.Cart,
  CartDetail: (id?: string): string => `${ModulePaths.Cart}/chi-tiet/${id || ':id'}`,

  Rank: ModulePaths.Rank,

  FavoriteProducts: '/san-pham-yeu-thich',

  ReferralCode: '/ma-gioi-thieu',

  HistoryRotation: '/lich-su-vong-quay',

  PaymentResult: '/ket-qua-thanh-toan',

  Wallet: ModulePaths.Wallet,
  WalletRecharge: `${ModulePaths.Wallet}/nap-tien`,
  WalletDetail: (id?: string): string => `${ModulePaths.Wallet}/chi-tiet/${id || ':id'}`,
  WalletRechargeResult: `${ModulePaths.Wallet}/ket-qua-thanh-toan`,

  Home: '/',
  AboutUs: '/ve-chung-toi',
  PolicyProduct: '/chinh-sach-bao-hanh-san-pham',
  PolicyReturn: '/chinh-sach-hoan-tra',
  PolicyInformation: '/chinh-sach-bao-ve-thong-tin',
  PolicyDuty: '/nghia-vu',
  PolicyShipping: '/phuong-thuc-giao-hang',
  Contact: '/lien-he',
  Handbooks: '/cam-nang',
  News: '/tin-tuc',
  HandbookDetail: (id?: string): string => `/cam-nang/${id || ':id'}`,
  NewDetail: (id?: string): string => `/tin-tuc/${id || ':id'}`,
  Categorys: `/danh-muc`,
  Category: (id?: string): string => `/danh-muc/${id || ':id'}`,
  Product: (id?: string): string => `/san-pham/${id || ':id'}`,
  Carts: ModulePaths.Carts,
  CartsNotLogin: `/kiem-tra-gio-hang`,
  Checkout: `/thanh-toan`,
  ProductSearch: `tim-kiem-san-pham`,

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
  ExerciseBought,
  ExerciseDetail,

  ExerciseOnline,
  ExerciseOnlineDetail,

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
  WalletRechargeResult,

  Home,
  AboutUs,
  PolicyProduct,
  PolicyReturn,
  PolicyDuty,
  PolicyInformation,
  PolicyShipping,
  Contact,
  Handbooks,
  News,
  HandbookDetail,
  NewDetail,
  Categorys,
  Category,
  Product,
  Carts,
  CartsNotLogin,
  Checkout,
  ProductSearch,

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
    <Suspense fallback={<PageLoading isFullPage showSpin={false} />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = authHelpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<PageLoading isFullPage showSpin={false} />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<PageLoading isFullPage showSpin={false} />}>
    <Component {...rest} />
  </Suspense>
);
