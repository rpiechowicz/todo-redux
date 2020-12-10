import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: 0,
  },
  reducers: {
    add: state => {
      state.value += 1;
    },
    remove: state => {
      state.value -= 1;
    },
    finish: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, remove, finish } = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export default tasksSlice.reducer;
