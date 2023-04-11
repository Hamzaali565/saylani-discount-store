import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  SET_OBJECT,
  SET_ADMIN,
  BASE_URL,
  SET_LOGIN,
  SET_CART,
  SET_TOKEN,
} from './actionType';

export const addition = () => ({
  type: ADDITION,
});
export const Subtraction = () => ({
  type: SUBTRACTION,
});
export const Multiplication = () => ({
  type: MULTIPLICATION,
});
export const setObject = object => ({
  type: SET_OBJECT,
  payload: object,
});
export const setAdmin = boolean => ({
  type: SET_ADMIN,
  payload: boolean,
});
export const setLogin = login => ({
  type: SET_LOGIN,
  payload: login,
});

export const baseurl = () => ({
  type: BASE_URL,
});
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});
export const setCart = cart => ({
  type: SET_CART,
  payload: cart,
});
