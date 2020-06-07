import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import Index from './Index'

const Main = () => {
  return (
    <div>
      <Router>
        <Route path='/' exact component={ Login }></Route>
        <Route path='/Index' component={ Index }></Route>
      </Router>
    </div>
  )
}

export default Main