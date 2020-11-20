import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, LogIn, SignUp } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/myways-assignment">
          <Home />
        </Route>
        <Route path="/myways-assignment/signup">
          <SignUp />
        </Route>
        <Route path="/myways-assignment/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
