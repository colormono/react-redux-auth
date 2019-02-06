import * as t from './actionTypes';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.USER:
      return { ...state, authenticated: action.payload, errorMessage: '' };
    case t.ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
