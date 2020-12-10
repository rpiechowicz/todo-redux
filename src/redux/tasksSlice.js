import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 0,
        text: "Nauczyć się TS",
        date: "20-12-2020",
        active: true,
        priority: true,
      },
      {
        id: 1,
        text: "Umyć auto",
        date: "18-12-2020",
        active: true,
        priority: false,
      },
      {
        id: 2,
        text: "Zrobić aplikację ToDo",
        date: "13-12-2020",
        active: false,
        priority: true,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
    finish: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, remove, finish } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
