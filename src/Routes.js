import React from "react"
import { Route, Switch } from "react-router-dom"
import AuthenticatedRoute from "./components/AuthenticatedRoute"
import UnauthenticatedRoute from "./components/UnauthenticatedRoute"
import Dashboard from "./containers/Dashboard"
import Home from "./containers/Home"
import MenuBoard from "./containers/MenuBoard"
import NotFound from "./containers/NotFound"
import Reports from "./containers/Reports"
import RequestDemo from "./containers/RequestDemo"
import SignIn from "./containers/SignIn"
import Signup from "./containers/SignUp"
import Weekly from "./containers/Weekly"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/request-demo">
        <RequestDemo />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/sign-in">
        <SignIn />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/sign-up">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/weekly">
        <Weekly />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/reports">
        <Reports />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/menu-board">
        <MenuBoard />
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
