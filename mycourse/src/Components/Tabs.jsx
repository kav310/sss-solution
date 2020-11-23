import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Tabs, Tab, makeStyles, Typography, Box } from "@material-ui/core";
import SessionsData from "./SessionsData";
import Doubts from "./DoubtsTab";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  color: {
    fontSize: "larger",
    fontWeight: "bold",
    color: "#165C7D",
    marginLeft: "2%",
  },
  gridSpacing: {
    marginLeft: "48px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SessionTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { data } = props;
  console.log(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.root}>
        <Tab label="Upcoming sessions" className={classes.color} />
        <Tab
          label="Past sessions"
          className={clsx(classes.tab, classes.color)}
        />
        <Tab label="Doubts" className={clsx(classes.tab, classes.color)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SessionsData data={data.upComing} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SessionsData data={data.past} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Doubts />
      </TabPanel>
    </>
  );
}
