import { ActionTypes } from '../actions';

const ErrorReducer = (state = {
  error: false,
  errorMessage: '',
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return ({
        error: true,
        errorMessage: action.message,
      });
    case ActionTypes.UNSET_ERROR:
      return ({
        error: false,
        errorMessage: '',
      });
    default:
      return state;
  }
};

export default ErrorReducer;
