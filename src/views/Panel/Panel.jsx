import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 475,
    height: 600,
  },
  card: {
    margin: 10,
  },
  item: {
    display: "block",
    margin: 15,
  },
});

function AddTask({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.card}>
        <Card className={classes.root}>{children}</Card>
      </Paper>
    </div>
  );
}

export default AddTask;
