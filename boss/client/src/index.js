import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './containers/Login'
import Register from './containers/Register'
import Main from './containers/Main'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
      <Route component={ Main } />
    </Switch>
  </HashRouter>,
  document.getElementById('root'));