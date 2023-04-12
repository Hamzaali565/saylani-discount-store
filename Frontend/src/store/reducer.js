import {
  ADDITION,
  MULTIPLICATION,
  SUBTRACTION,
  SET_OBJECT,
  SET_ADMIN,
  BASE_URL,
  SET_LOGIN,
  SET_CART,
  SET_TOKEN,
  SET_CART_NUMBER,
} from './actionType';

const initialState = {
  counter: 0,
  object: null,
  boolean: null,
  login: null,
  url: 'http://192.168.3.105:3001',
  cart: null,
  token: null,
  cartNumber: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBTRACTION:
      return {...state, counter: state.counter - 1};
    case MULTIPLICATION:
      return {...state, counter: state.counter * 2};
    case SET_OBJECT:
      return {
        ...state,
        object: action.payload,
      };
    case SET_ADMIN:
      return {
        ...state,
        boolean: action.payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case BASE_URL:
      return {
        ...state,
        url: state.url,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_CART_NUMBER:
      return {
        ...state,
        cartNumber: state.cartNumber + 1,
      };
    default:
      return state;
  }
};
