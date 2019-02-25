import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import store from './store';

import { App, Welcome, Features } from './components/App';
import { SignUp, SignIn, SignOut } from './components/Auth';
import { StreamList, CreateStream, EditStream } from './components/Streams';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/features" component={Features} />
        <Route path="/streams" exact component={StreamList} />
        <Route path="/streams/create" component={CreateStream} />
        <Route path="/streams/edit/:id" exact component={EditStream} />
      </App>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
