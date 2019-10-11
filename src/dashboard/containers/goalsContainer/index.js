import React, { Fragment } from "react";
import GoalsTable from "./GoalsTable";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 280,
     
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
        <Grid container className={classes.root} spacing={9}>
          <Grid item sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <h3>Total Goals for {year} : 12</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <h4>Goals achieved for {year} : 3</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <h4>Goals Not even close babe!!: 3</h4>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <GoalsTable />
      </Fragment>
    </Container>
  );
};
