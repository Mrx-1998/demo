import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/Login'
import Create from './components/Create'
import Home from './components/Home'


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/create' component={ Create } />
      </Switch>
    </Router>
  </Provider>
    , 
    document.getElementById('root'))