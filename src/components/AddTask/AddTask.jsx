import React, { useState } from "react";

import { Panel } from "../../views";

import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  CardContent,
  Button,
  Typography,
  FormControl,
  Input,
  FormControlLabel,
  InputLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 475,
    height: 600,
  },
  card: {
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  item: {
    display: "block",
    margin: 15,
  },
});

function AddTask() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleAddTask = () => {
    console.log("add");
  };

  return (
    <div>
      <Panel>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Add new task
          </Typography>

          <div className={classes.item}>
            <FormControl>
              <InputLabel htmlFor="my-input">Description</InputLabel>
              <Input name="text" aria-describedby="my-helper-text" />
            </FormControl>
          </div>

          <div className={classes.item}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </div>

          <div className={classes.item}>
            <FormControlLabel
              control={<Checkbox name="priority" color="primary" />}
              label="Priority"
            />
          </div>
        </CardContent>

        <div className={classes.item} onClick={handleAddTask}>
          <Button color="primary" variant="contained">
            Add taks
          </Button>
        </div>
      </Panel>
    </div>
  );
}

export default AddTask;
