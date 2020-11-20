import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, LogIn, SignUp } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
