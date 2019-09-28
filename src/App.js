import React, { Fragment } from "react";
import Dashboard from "./dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./navbar";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
 
export default () => {
 
  return (
  <BrowserRouter>
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Dashboard />
      

        
      <Switch>
          <Route exact path="/" render={() => <div><button>Login</button></div>} />
          <Route path="/Dashboard" render={() => <div>baraka</div>} />
          <Route render={() => <h3>Not found</h3>} />
      </Switch>

      </Fragment>
   </BrowserRouter>
  );
};
