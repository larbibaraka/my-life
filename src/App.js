import React, { Fragment } from "react";
import Dashboard from "./dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavBar from './dashboard/navbar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    fixed : {
    maxWidth : '1200px'
    }
  }));

export default () => {
    const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <NavBar/>
      <Container className={classes.fixed}>
        <Dashboard />
      </Container>
    </Fragment>
  );
};
