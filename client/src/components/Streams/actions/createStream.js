import * as t from '../actionTypes';
import streams from '../../../apis/streams';

export default function createStream(formValues, callback) {
  return async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({
      type: t.CREATE_STREAM,
      payload: response.data
    });

    callback();
  };
}
