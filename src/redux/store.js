import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
});

export default store;
