import * as types from '../types/types.js';

export const buy = payload => ({
    type: types.BUY,
    payload
});

export const selectProduct = payload => ({
    type: types.SELECT_PRODUCT,
    payload
});

export const enterCash = payload => ({
  type: types.ENTER_CASH,
  payload
});
