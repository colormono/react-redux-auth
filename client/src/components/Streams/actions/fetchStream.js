import * as t from '../actionTypes';
import streams from '../../../apis/streams';

export default function fetchStream(id, callback) {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
      type: t.FETCH_STREAM,
      payload: response.data
    });

    if (callback) callback();
  };
}
