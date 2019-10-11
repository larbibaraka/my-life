import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
/**
 * import components
 */
import Goals from "../components/goals";
import Habits from "../components/habits";
import Books from "../components/books";
import Thoughts from "../components/thoughts";
import Animes from "../components/animes";
import Movies from "../components/movies";
import Workout from "../components/workout";
import Workshop from "../components/workshop";
import SocialMedia from "../components/socialmedia";
import Expense from "../components/expense";
import Diaries from "../components/diaries";
import Pics from "../components/pics";
/************************************************************* */
import { Link } from "react-router-dom";
import './dashboard.scss';

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
  },
  fixed: {
    maxWidth: "1200px"
  }
}));

export default () => {
  const classes = useStyle();
  
  return (
        <Container className={classes.fixed}>
          <Fragment>
            <Typography variant="h6" noWrap>
              Productivity :
            </Typography>
            <br />
            <Grid container className={classes.root} spacing={9}>
              <Grid item sm={3}>
                <Link to="/dashboard/goals">
                  <Goals />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/habits">
                  <Habits />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/workout">
                  <Workout />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/books">
                  <Books />
                </Link>
              </Grid>
              {/*  */}
            </Grid>
            <br />
            <Typography variant="h6" noWrap>
              Ideas :
            </Typography>
            <br />
            <Grid container className={classes.root} spacing={9}>
              <Grid item sm={3}>
                <Link to="/dashboard/thoughts">
                  <Thoughts />
                </Link>
              </Grid>
              {/*  */}

              <Grid item sm={3}>
                <Link to="/dashboard/workshop">
                  <Workshop />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/expense">
                  <Expense />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/diaries">
                  <Diaries />
                </Link>
              </Grid>
              {/*  */}
            </Grid>
            <br />
            <Typography variant="h6" noWrap>
              Relax :
            </Typography>
            <br />
            <Grid container className={classes.root} spacing={9}>
              <Grid item sm={3}>
                <Link to="/dashboard/movies">
                  <Movies />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/animes">
                  <Animes />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/social_media">
                  <SocialMedia />
                </Link>
              </Grid>
              {/*  */}
              <Grid item sm={3}>
                <Link to="/dashboard/pics">
                  <Pics />
                </Link>
              </Grid>
            </Grid>
          </Fragment>
        </Container>
      );
  
};
