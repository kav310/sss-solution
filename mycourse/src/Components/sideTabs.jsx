import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MyCourse from "./MyCourse";
import { maths, english, science } from "../data";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabsPanel: {
    width: "100%",
  },
  color: {
    background: "#165C7D",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={3} className={classes.color}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Maths" {...a11yProps(0)} />
            <Tab label="English" {...a11yProps(1)} />
            <Tab label="Science" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item lg={9}>
          <TabPanel value={value} index={0} className={classes.tabsPanel}>
            <MyCourse data={maths} />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabsPanel}>
            <MyCourse data={english} />
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabsPanel}>
            <MyCourse data={science} />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
