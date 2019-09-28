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
  }
}));
export default () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
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
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Habits tracking</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Sport programm</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Books</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Dairy</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Movies to watch</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>Thoughts</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>expense tracker</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        </Grid>
        <Grid container className={classes.root} spacing={2}>
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>social media pages</h1>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <h1>pictures i loved</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
