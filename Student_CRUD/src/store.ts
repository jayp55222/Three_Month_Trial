import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./services/studentApi";
import { booleanReducer } from "./services/booleanSlice";
import studentSliceReducer from "./services/dataSlice";
// ...

export const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
    boolean: booleanReducer,
    editablestudent: studentSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
