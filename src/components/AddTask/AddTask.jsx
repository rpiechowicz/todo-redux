import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, error, selectError } from "../../redux/tasksSlice";
import { v4 as uuidv4 } from "uuid";

import { Panel } from "../../views";

import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  CardContent,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
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
  const errorIsActive = useSelector(selectError);
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [inputTask, setInputTask] = useState("");
  const [checkboxTask, setCheckboxTask] = useState(false);
  const classes = useStyles();

  const labelError = useMemo(() => (errorIsActive ? "Error" : "Description"), [
    errorIsActive,
  ]);

  const helperTextError = useMemo(() => errorIsActive && "Filed is required", [
    errorIsActive,
  ]);

  const handleAddTask = useCallback(() => {
    if (!inputTask) {
      dispatch(error({ error: true }));
      return;
    } else {
      if (errorIsActive) dispatch(error({ error: false }));

      dispatch(
        add({
          id: uuidv4(),
          text: inputTask,
          date: new Date(selectedDate)
            .toLocaleDateString()
            .split(".")
            .join("-"),
          active: true,
          priority: checkboxTask,
        })
      );

      setInputTask("");
      setCheckboxTask(false);
      handleDateChange(new Date());
    }
  }, [checkboxTask, errorIsActive, inputTask, selectedDate, dispatch]);

  const handleChangeInput = useCallback(
    (e) =>
      setInputTask(e.target.value) &&
      errorIsActive &&
      dispatch(error({ error: false })),
    [errorIsActive, dispatch]
  );

  const handleSetCheckbox = useCallback(
    (e) => setCheckboxTask(e.target.checked),
    []
  );

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
              <TextField
                error={errorIsActive}
                id="standard-error-helper-text"
                label={labelError}
                helperText={helperTextError}
                value={inputTask}
                onChange={handleChangeInput}
              />
            </FormControl>
          </div>

          <div className={classes.item}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                value={selectedDate}
                minDate={new Date()}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className={classes.item}>
            <FormControlLabel
              control={<Checkbox name="priority" color="primary" />}
              label="Priority"
              checked={checkboxTask}
              onChange={handleSetCheckbox}
            />
          </div>
        </CardContent>

        <div className={classes.item} onClick={handleAddTask}>
          <Button color="primary" variant="contained">
            Add task
          </Button>
        </div>
      </Panel>
    </div>
  );
}

export default AddTask;
