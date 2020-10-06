import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id }
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERRORS
  };
};
