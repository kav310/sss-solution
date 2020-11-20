import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "500px",
    background: "#e5e5e5",
    margin: theme.spacing(4, 0, 0, 7),
    flexGrow: 1,
    overflow: "auto",
  },
  title: {
    color: "black",
  },
  app: {
    background: "#00ADDF",
  },
}));

export default function ChatBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
