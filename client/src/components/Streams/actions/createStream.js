import * as t from '../actionTypes';
import streams from '../../../apis/streams';
//import history from '../../../history.js';

const createStream = (formValues, callback) => {
  return async (dispatch, getState) => {
    const { id } = getState().auth.user;
    console.log(id);
    const response = await streams.post('/streams', {
      ...formValues,
      userId: id
    });

    dispatch({
      type: t.CREATE_STREAM,
      payload: response.data
    });

    if (callback) callback();
    //history.push('/');
  };
};

export default createStream;
