import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as authReducer } from './components/Auth';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
