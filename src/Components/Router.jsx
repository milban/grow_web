import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import User from './User'

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route paht="/user/:id" component={User} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)
