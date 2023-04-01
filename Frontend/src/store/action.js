import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  SET_OBJECT,
  SET_ADMIN,
  BASE_URL,
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
export const baseurl = () => ({
  type: BASE_URL,
});
