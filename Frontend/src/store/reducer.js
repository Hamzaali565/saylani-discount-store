import {
  ADDITION,
  MULTIPLICATION,
  SUBTRACTION,
  SET_OBJECT,
  SET_ADMIN,
  BASE_URL,
} from './actionType';

const initialState = {
  counter: 0,
  object: null,
  boolean: null,
  url: 'http://192.168.3.105:3001/api/v1',
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
    case BASE_URL:
      return {
        ...state,
        url: state.url,
      };
    default:
      return state;
  }
};
