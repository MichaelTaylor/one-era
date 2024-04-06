import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earliestElement: "",
  latestElement: "",
  latestDateElement: "",
};

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    setEarliestElement: (state, action) => {
      state.earliestElement = action.payload;
    },
    setLatestElement: (state, action) => {
      state.latestElement = action.payload;
    },
    setLatestDateElement: (state, action) => {
      state.latestDateElement = action.payload;
    },
    clearElements: (state) => {
      state.earliestElement = "";
      state.latestElement = "";
    },
  },
});

export const {
  setEarliestElement,
  setLatestElement,
  clearElements,
  setLatestDateElement,
} = elementsSlice.actions;
export default elementsSlice.reducer;
