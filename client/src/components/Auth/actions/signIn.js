import * as t from '../actionTypes';
import axios from 'axios';

export default function signIn(formProps, callback) {
  return async (dispatch, getState) => {
    try {
      const resp = await axios.post('https://reqres.in/api/login', {
        email: formProps.email,
        password: formProps.password
      });

      dispatch({
        type: t.USER,
        payload: resp.data.token
      });

      localStorage.setItem('token', resp.data.token);

      callback();
    } catch (e) {
      dispatch({
        type: t.ERROR,
        payload: 'Error getting data from API'
      });
    }
  };
}
