import React from 'react' ;
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


export default () => {
    return (
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
    )
}