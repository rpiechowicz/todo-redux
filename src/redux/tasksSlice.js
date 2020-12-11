import { createSlice } from "@reduxjs/toolkit";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    error: false,
    tasks: [
      {
        id: "eefffa0d-898e-4db3-885e-3384a8aad3a4",
        text: "Nauczyć się TS",
        date: "20-12-2020",
        active: true,
        priority: true,
      },
      {
        id: "52ca493b-ab30-4f16-9734-c56a35f2a187",
        text: "Umyć auto",
        date: "18-12-2020",
        active: true,
        priority: false,
      },
      {
        id: "6df61d5c-46fb-4793-96e1-0a38a9484f01",
        text: "Zrobić aplikację ToDo",
        date: "13-12-2020",
        active: false,
        priority: true,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    remove: (state, action) => {
      state.tasks = action.payload.tasksList;
    },
    finish: (state, action) => {
      state.tasks = action.payload.tasksList;
    },
    error: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { add, remove, finish, error } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectError = (state) => state.tasks.error;

export default tasksSlice.reducer;
