import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';
/**
 * import components
 */
import Goals from "./components/goals";
import Habits from "./components/habits";
import Books from "./components/books";
import Thoughts from "./components/thoughts";
import Animes from "./components/animes";
import Movies from "./components/movies";
import Workout from "./components/workout";
import Workshop from "./components/workshop";
import SocialMedia from "./components/socialmedia";
import Expense from "./components/expense";
import Diaries from "./components/diaries";
import Pics from "./components/pics";

import "./dashboard.scss";
const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 280,
    cursor: "pointer"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));
export default () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Typography variant="h6" noWrap>
          Productivity : 
      </Typography>
      <br/>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Goals />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Habits />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Workout />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Books />
        </Grid>
        {/*  */}
      </Grid>
      <br/>
      <Typography variant="h6" noWrap>
      Ideas :
      </Typography>
      <br/>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Thoughts />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Workshop />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Expense />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Diaries />
        </Grid>
        {/*  */}
      </Grid>
      <br/>
      <Typography variant="h6" noWrap>
        Relax :
      </Typography>
      <br/>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Movies />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Animes />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <SocialMedia />
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Pics />
        </Grid>
      </Grid>
    </Fragment>
  );
};
