import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./redux/tasksSlice";

import { AddTask, TaskList } from "./components";

import { makeStyles } from "@material-ui/core/styles";
import "./assets/App.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: 10,
  },
});

function App() {
  const tasks = useSelector(selectTasks);

  // const dispatch = useDispatch();
  const classes = useStyles();

  const activeTasks = tasks && tasks.filter((task) => task.active);
  const finishedTasks = tasks && tasks.filter((task) => !task.active);

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
          <AddTask />

          {/* Active Tasks */}
          <TaskList activeTasks={activeTasks && [...activeTasks]} />

          {/* Finised Tasks */}
          <TaskList finishedTasks={finishedTasks && [...finishedTasks]} />
        </div>
      </header>
    </div>
  );
}

export default App;
