import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const preloadedState = {
  auth: {
    authenticated: localStorage.getItem('token')
  }
};

const middleware = applyMiddleware(reduxThunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(middleware)
);

export default store;
