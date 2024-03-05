import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earliestElement: "",
  latestElement: "",
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
    clearElements: () => initialState,
  },
});

export const { setEarliestElement, setLatestElement, clearElements } =
  elementsSlice.actions;
export default elementsSlice.reducer;
