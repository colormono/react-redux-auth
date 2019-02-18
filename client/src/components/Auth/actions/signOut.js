import * as t from '../actionTypes';

export default function signOut() {
  localStorage.removeItem('token');

  return {
    type: t.SIGN_OUT,
    payload: ''
  };
}
