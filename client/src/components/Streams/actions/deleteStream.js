import * as t from '../actionTypes';
import streams from '../../../apis/streams';

export default function deleteStream(id, callback) {
  return async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
      type: t.DELETE_STREAM,
      payload: id
    });

    if (callback) callback();
  };
}
