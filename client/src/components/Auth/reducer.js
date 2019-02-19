import * as t from './actionTypes';

const INITIAL_STATE = {
  isSignedIn: null,
  errorMessage: '',
  user: {
    id: null,
    email: null,
    token: '',
    signedWith: null
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        errorMessage: ''
      };
    case t.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        user: INITIAL_STATE.user,
        errorMessage: ''
      };
    case t.ERROR:
      return { ...state, isSignedIn: false, errorMessage: action.payload };
    default:
      return state;
  }
}
