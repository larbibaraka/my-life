import React from 'react' ;
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles(theme => ({
    card: {
    minWidth: 280,
    cursor : 'pointer'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
   
  }
}));

export default () => {
  const classes = useStyle();
    return (
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
    )
}