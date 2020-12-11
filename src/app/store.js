import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasksSlice";
import notificationMiddleware from "../middleware/notification";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notificationMiddleware),
  reducer: {
    tasks: tasksReducer,
  },
});
