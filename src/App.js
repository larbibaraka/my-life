import React, { Fragment, useState } from "react";
import Dashboard from "./dashboard";
import Login from './login';

import NavBar from "./navbar";

import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
 
export default () => {
  const [login , setLogin] = useState(false)
  if(!login) {
   return <Redirect to="/"/>
  }
  return <Redirect to="/dashboard"/>
};
