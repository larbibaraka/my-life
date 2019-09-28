import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
    <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route render={() => <h3>Not found</h3>} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
