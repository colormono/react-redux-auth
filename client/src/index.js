import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { App, Welcome, Features } from './components/App';
import { SignUp, SignIn, SignOut } from './components/Auth';
import { CreateStream, StreamList } from './components/Streams';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/features" component={Features} />
        <Route path="/streams" exact component={StreamList} />
        <Route path="/streams/create" component={CreateStream} />
      </App>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
