import * as t from '../actionTypes';
import streams from '../../../apis/streams';

export default function fetchStreams() {
  return async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
      type: t.FETCH_STREAMS,
      payload: response.data
    });
  };
}
