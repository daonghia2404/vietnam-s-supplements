import { ESex } from '@/common/enums';
import { EHistoryPrizeStatus } from '@/services/api/wheel-controller/enums';

/* eslint-disable no-useless-escape */
export const regex = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
  domain: /^[a-zA-Z0-9](?:[a-zA-Z0-9-.]*[a-zA-Z0-9])?$/i,
  alphabetic: /^[a-z\s]+$/i,
  alphanumerial: /^[a-z0-9\s]+$/i,
  numeric: /^\d+$/i,
  onlySpecialKey: /[$&+,:;=?@#|'<>.^*()%`~_!\-"\]\[\\}{'/]/g,
  phone: /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g,
};

export const dataSexOptions = [
  { label: 'Nam', value: ESex.MALE },
  { label: 'Nữ', value: ESex.FEMALE },
];

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const dataPrizeStatusOptions = [
  { value: EHistoryPrizeStatus.RECEIVED, label: 'Đã nhận thưởng', color: 'success' },
  { value: EHistoryPrizeStatus.NOT_RECEIVED, label: 'Chưa nhận thưởng', color: 'warning' },
];
