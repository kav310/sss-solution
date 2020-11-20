import React from "react";
import { makeStyles, Grid, Divider, Typography, Box } from "@material-ui/core";
import SimpleDialogDemo from "./Dialog";
import ChatBox from "./Chat";
import SessionTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(3),
    },
  },
  shape: {
    border: 0,
    outline: 0,
    background: "#e5e5e5",
    padding: "15px 50px",
    fontSize: "x-large",
    marginLeft: "20px",
  },
  vl: {
    height: "800px",
  },
  subject: {
    margin: theme.spacing(3, 0, 5, 3),
  },
  dot: {
    height: "100px",
    width: "100px",
    backgroundColor: "#00ADDF",
    borderRadius: "50%",
    display: "inline-block",
    margin: theme.spacing(0, 5, 0, 4),
    float: "left",
  },
  clear: {
    clear: "both",
  },
  session: {
    color: "#ED8936",
  },
}));

function MyCourse() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <button className={classes.shape}>New course</button>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.vl} />
        <Grid item lg={6}>
          <Grid container>
            <Grid item lg={3}>
              <Typography variant="h5" className={classes.subject}>
                English
              </Typography>
            </Grid>
            <Grid item lg={9}>
              <Box textAlign="right" m={1}>
                <Typography variant="h5" className={classes.session}>
                  Sessions Completed:14
                </Typography>
                <Typography variant="h5" className={classes.session}>
                  Doubts Resolved:34
                </Typography>
                <Typography variant="h5" className={classes.session}>
                  Home work Completed:12
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <SessionTabs />
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.vl} />
        <Grid item lg={3}>
          <Typography variant="h5" className={classes.subject}>
            Tutor Profile
          </Typography>
          <div>
            <span className={classes.dot}></span>
            <Typography variant="h6">Tutor Ghazal</Typography>
            <Typography variant="subtitle1">HTML,Maths</Typography>
            <Typography variant="subtitle2">India</Typography>
          </div>
          <div className={classes.clear}>
            <SimpleDialogDemo />
          </div>
          <div>
            <ChatBox />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default MyCourse;