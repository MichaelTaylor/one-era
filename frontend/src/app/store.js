import { configureStore } from "@reduxjs/toolkit";
import elementReducer from "./features/elementsSlice";

export const store = configureStore({
  reducer: {
    element: elementReducer,
  },
});
