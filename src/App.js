import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Products, GetAQUBI, Contact } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/products"><Products /></Route>
        <Route path="/getaqubi"><GetAQUBI /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
    </Router>
  )
}

export default App
