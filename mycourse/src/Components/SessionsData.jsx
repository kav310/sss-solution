import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
    <Grid container>
      <Grid item lg={12}>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">Date</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h5">Time</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h5">Topic</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h5">Home work</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row) => (
                  <TableRow>
                    <TableCell>
                      {" "}
                      <Typography variant="subtitle1">{row.date}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography variant="subtitle1">{row.time}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography variant="subtitle1">{row.topic}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography variant="subtitle1">{row.action}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
