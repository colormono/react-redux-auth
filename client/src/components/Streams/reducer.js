import * as t from './actionTypes';
import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case t.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case t.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case t.EDIT_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;
      // === in es6 with key interpolation
      return { ...state, [action.payload.id]: action.payload };
    case t.DELETE_STREAM:
      //return {...state, [action.payload]: undefined };
      //return delete state[action.payload];
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
