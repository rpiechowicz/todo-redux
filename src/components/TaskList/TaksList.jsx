import React from "react";

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

const ListOfTasks = ({ text, date, priority, active }) => (
  <>
    <List>
      <ListItem>
        <ListItemText primary={text} secondary={priority && "Important"} />
        <ListItemText>{date}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
          {active && (
            <IconButton edge="end" aria-label="delete">
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
  return (
    <div>
      <Panel>
        {activeTasks ? (
          <TypographTitle title="Active Tasks" />
        ) : (
          <TypographTitle title="Finished Tasks" />
        )}

        {activeTasks &&
          activeTasks.map((task) => <ListOfTasks {...task} key={task.id} />)}
        {finishedTasks &&
          finishedTasks.map((task) => <ListOfTasks {...task} key={task.id} />)}
      </Panel>
    </div>
  );
}

export default TaksList;
