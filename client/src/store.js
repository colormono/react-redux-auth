import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const currentUser = localStorage.getItem('currentUser');

const preloadedState = {
  auth: {
    isSignedIn: currentUser ? true : false,
    user: currentUser ? JSON.parse(currentUser) : null
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
