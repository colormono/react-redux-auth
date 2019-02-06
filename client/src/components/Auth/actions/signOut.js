import * as t from '../actionTypes';

export default function signOut() {
  localStorage.removeItem('token');

  return {
    type: t.USER,
    payload: ''
  };
}
