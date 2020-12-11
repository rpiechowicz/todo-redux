import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { finish, remove, selectTasks } from "../../redux/tasksSlice";

import { Panel } from "../../views";

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

const ListOfTasks = ({
  id,
  text,
  date,
  priority,
  active,
  onClickFinish,
  onClickRemove,
}) => (
  <>
    <List>
      <ListItem>
        <ListItemText primary={text} secondary={priority && "Important"} />
        <ListItemText style={{ position: "absolute", right: "20%" }}>
          {date}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={onClickRemove}>
            <DeleteIcon />
          </IconButton>
          {active && (
            <IconButton edge="end" aria-label="delete" onClick={onClickFinish}>
              <DoneIcon />
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    </List>
    <Divider />
  </>
);

const TypographTitle = ({ title }) => (
  <CardContent>
    <Typography style={{ fontSize: 20 }} color="textSecondary" gutterBottom>
      {title}
    </Typography>
  </CardContent>
);

function TaksList({ activeTasks = [], finishedTasks = [] }) {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleFinishTask = (id) => {
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
  };

  const handleRemoveTask = (id) => {
    const tasksList = [...tasks];
    const indexTask = tasksList.findIndex((task) => task.id === id);
    tasksList.splice(indexTask, 1);

    dispatch(
      remove({
        tasksList,
      })
    );
  };

  return (
    <div>
      <Panel>
        {activeTasks ? (
          <TypographTitle title="Active Tasks" />
        ) : (
          <TypographTitle title="Finished Tasks" />
        )}

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
