import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as authReducer } from './components/Auth';
import { reducer as streamsReducer } from './components/Streams';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});
