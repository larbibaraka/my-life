import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/**
 * import components
 */


import "./dashboard.scss";
const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
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
    <Fragment>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
        <Grid item sm={3}>
       
        </Grid>
        {/*  */}
        <Grid item sm={3}>
       
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
      </Grid>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
        
        </Grid>
        {/*  */}
        <Grid item sm={3}>
         
        </Grid>
        {/*  */}
        <Grid item sm={3}>
         
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
      </Grid>
      <Grid container className={classes.root} spacing={9}>
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          
        </Grid>
        {/*  */}
        <Grid item sm={3}>
          
        </Grid>
      </Grid>
    </Fragment>
  );
};
