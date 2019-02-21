import * as t from '../actionTypes';
import streams from '../../../apis/streams';

export default function editStream(id, formValues, callback) {
  return async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({
      type: t.EDIT_STREAM,
      payload: response.data
    });

    callback();
  };
}
