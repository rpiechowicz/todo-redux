import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { finish, remove, selectTasks } from "../../redux/tasksSlice";

import { Panel } from "../../views";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles({
  importantField: {
    color: "red",
    fontWeight: 400,
  },
  date: {
    position: "absolute",
    right: "20%",
  },
  title: {
    fontSize: 20,
  },
});

const ListOfTasks = ({
  text,
  date,
  priority,
  active,
  onClickFinish,
  onClickRemove,
}) => {
  const classes = useStyles();

  const secondaryText = useMemo(
    () => priority && <span className={classes.importantField}>Important</span>,
    [priority, classes.importantField]
  );

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={text} secondary={secondaryText} />
          <ListItemText className={classes.date}>{date}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={onClickRemove}>
              <DeleteIcon />
            </IconButton>
            {active && (
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={onClickFinish}
              >
                <DoneIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};
const TypographTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {title}
      </Typography>
    </CardContent>
  );
};

function TaksList({ activeTasks = [], finishedTasks = [], title }) {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleFinishTask = useCallback(
    (id) => {
      let tasksList = [...tasks];
      tasksList = tasksList.map((task) => {
        if (task.id === id) {
          return {
            id: task.id,
            text: task.text,
            date: task.date,
            active: false,
            priority: task.priority,
          };
        } else {
          return task;
        }
      });

      dispatch(
        finish({
          tasksList,
        })
      );
    },
    [tasks, dispatch]
  );

  const handleRemoveTask = useCallback(
    (id) => {
      const tasksList = [...tasks];
      const indexTask = tasksList.findIndex((task) => task.id === id);
      tasksList.splice(indexTask, 1);

      dispatch(
        remove({
          tasksList,
        })
      );
    },
    [tasks, dispatch]
  );

  return (
    <div>
      <Panel>
        <TypographTitle title={title} />

        {activeTasks &&
          activeTasks.map((task) => (
            <ListOfTasks
              {...task}
              key={task.id}
              onClickFinish={() => handleFinishTask(task.id)}
              onClickRemove={() => handleRemoveTask(task.id)}
            />
          ))}
        {finishedTasks &&
          finishedTasks.map((task) => (
            <ListOfTasks
              {...task}
              key={task.id}
              onClickRemove={() => handleRemoveTask(task.id)}
            />
          ))}
      </Panel>
    </div>
  );
}

export default TaksList;
