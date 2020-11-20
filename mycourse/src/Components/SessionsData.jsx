import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridSpacing: {
    marginLeft: "5px",
    marginTop: "10px",
    background: "#e5e5e5",
    padding: "25px 20px",
  },
  margin: {
    paddingLeft: "80px",
  },
}));

export default function SessionsData() {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container className={classes.gridSpacing}>
        <Grid item lg={3}>
          Today
          <br /> 14/10/2020
        </Grid>
        <Grid item lg={3}>
          2:00 PM
        </Grid>
        <Grid item lg={3}>
          to be updated
        </Grid>
        <Grid item lg={3} className={classes.margin}>
          Join
        </Grid>
      </Grid>
      <Grid container className={classes.gridSpacing}>
        <Grid item lg={3}>
          Today
          <br /> 14/10/2020
        </Grid>
        <Grid item lg={3}>
          2:00 PM
        </Grid>
        <Grid item lg={3}>
          to be updated
        </Grid>
        <Grid item lg={3} className={classes.margin}>
          Join
        </Grid>
      </Grid>
      <Grid container className={classes.gridSpacing}>
        <Grid item lg={3}>
          Today
          <br /> 14/10/2020
        </Grid>
        <Grid item lg={3}>
          2:00 PM
        </Grid>
        <Grid item lg={3}>
          to be updated
        </Grid>
        <Grid item lg={3} className={classes.margin}>
          Join
        </Grid>
      </Grid>
      <Grid container className={classes.gridSpacing}>
        <Grid item lg={3}>
          Today
          <br /> 14/10/2020
        </Grid>
        <Grid item lg={3}>
          2:00 PM
        </Grid>
        <Grid item lg={3}>
          to be updated
        </Grid>
        <Grid item lg={3} className={classes.margin}>
          Join
        </Grid>
      </Grid>
    </Grid>
  );
}
