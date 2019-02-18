import * as t from '../actionTypes';

export default function signInWithGoogle(props, callback) {
  return async (dispatch, getState) => {
    try {
      const payload = {
        id: props.userId,
        email: props.userEmail,
        token: props.userEmail
      };

      dispatch({
        type: t.SIGN_IN,
        payload: payload
      });

      localStorage.setItem('token', props.userEmail);

      //callback();
    } catch (e) {
      dispatch({
        type: t.ERROR,
        payload: 'Error getting data from API'
      });
    }
  };
}
