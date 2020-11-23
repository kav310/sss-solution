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

export default function SessionsData(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Grid>
      {data &&
        data.map((item) => (
          <>
            <Grid container className={classes.gridSpacing}>
              <Grid item lg={3}>
                {item.day}
                <br /> {item.time}
              </Grid>
              <Grid item lg={3}>
                {item.date}
              </Grid>
              <Grid item lg={3}>
                {item.topic}
              </Grid>
              <Grid item lg={3} className={classes.margin}>
                {item.action}
              </Grid>
            </Grid>
          </>
        ))}
    </Grid>
  );
}
