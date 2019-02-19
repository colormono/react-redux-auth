import * as t from '../actionTypes';

export default function signOut() {
  localStorage.removeItem('currentUser');

  return {
    type: t.SIGN_OUT,
    payload: ''
  };
}
