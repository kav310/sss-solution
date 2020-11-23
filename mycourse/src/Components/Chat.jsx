import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "400px",
    background: "#e5e5e5",
    borderRadius: "0 0 10px 10px",
    margin: theme.spacing(10, 0, 0, 7),
    flexGrow: 1,
    overflow: "auto",
  },
  app: {
    background: "#165C7D",
    borderRadius: "20px 20px 0 0",
  },
}));

export default function ChatBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <Typography variant="h6">Chat</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
