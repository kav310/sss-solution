import React from "react";
import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    padding: "25px 20px",
  },
  color: {
    color: "#FF6A2A",
  },
}));

function Doubts() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item lg={10} variant="h6">
            <Typography>
              okay, no problem.submit your doubt by ask a doubt by ask a doubt
              button or........
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="subtitle1" className={classes.color}>
              View
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item lg={10} variant="h6">
            <Typography>
              okay, no problem.submit your doubt by ask a doubt by ask a doubt
              button or........
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="subtitle1" className={classes.color}>
              View
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item lg={10} variant="h6">
            <Typography>
              okay, no problem.submit your doubt by ask a doubt by ask a doubt
              button or........
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="subtitle1" className={classes.color}>
              View
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
export default Doubts;
