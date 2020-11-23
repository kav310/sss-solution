import React from "react";
import { makeStyles, Grid, Divider, Typography, Box } from "@material-ui/core";
import SimpleDialogDemo from "./Dialog";
import ChatBox from "./Chat";
import SessionTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
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
    backgroundColor: "#165C7D",
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

function MyCourse(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <Typography variant="h3" className={classes.subject}>
            {data[0].subject}
          </Typography>
          <SessionTabs data={data[0]} />
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.vl} />
        <Grid item lg={3}>
          <Typography variant="h4" className={classes.subject}>
            Tutor Profile
          </Typography>
          <div>
            <span className={classes.dot}></span>
            <Typography variant="h5">{data[0].Tutor}</Typography>
            <Typography variant="h6">{data[0].subjects}</Typography>
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
