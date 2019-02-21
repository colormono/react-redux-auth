import * as t from '../actionTypes';
import axios from 'axios';

export default function signIn(formProps, callback) {
  return async (dispatch, getState) => {
    try {
      const resp = await axios.post('https://reqres.in/api/login', {
        email: formProps.email,
        password: formProps.password
      });

      const user = {
        id: formProps.email,
        email: formProps.email,
        token: resp.data.token,
        signedWith: 'email'
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
