import * as t from '../actionTypes';

export default function signInWithGoogle(props, callback) {
  return async (dispatch, getState) => {
    try {
      const user = {
        id: props.userId,
        email: props.userEmail,
        token: props.userEmail,
        signedWith: 'google'
      };

      dispatch({
        type: t.SIGN_IN,
        payload: user
      });

      localStorage.setItem('currentUser', JSON.stringify(user));

      callback();
    } catch (e) {
      dispatch({
        type: t.ERROR,
        payload: 'Error getting data from API'
      });
    }
  };
}
