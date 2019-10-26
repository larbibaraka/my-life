import React, { Fragment } from "react";
import GoalsTable from "./GoalsTable";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 280
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  fixed: {
    maxWidth: "1600px"
  }
}));

export default () => {
  const classes = useStyle();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container className={classes.fixed}>
      <Fragment>
        <div class=" rounded overflow-hidden shadow-lg m-6 w-auto">
          <div class="px-6 py-4">
          <FormControlLabel
        control={
          <Switch
            checked=""
            value="checkedB"
            color="primary"
          />
        }
        label="Active Goals"
      />
          </div>
        </div>
      </Fragment>
    </Container>
  );
};
