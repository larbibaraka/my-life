import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";

import "./dashboard.scss";
const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    //minWidth: 275
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
export default () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/goaltracker.jpg"
              title=""
            />
             {/* <img src={Goals} alt="Logo" /> */}
            <CardContent>
              <h4>Goals tracking</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/habits.jpg"
              title=""
            />
            <CardContent>
              <h4>Habits tracking</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/workout_program.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Workout Program</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/books.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Books</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
      </Grid>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/diaries.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>my Diaries</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/movies.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Movies to watch</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/thoughts.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Thoughts</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/expense-tracking.png"
              title="Paella dish"
            />
            <CardContent>
              <h4>expense tracker</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
       </Grid>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/facebook.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>social media pages</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/pics.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>pictures i loved</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/workshop.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Workshops</h4>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/animes.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h4>Animes</h4>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </Fragment>
  );
};
