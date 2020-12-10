import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
