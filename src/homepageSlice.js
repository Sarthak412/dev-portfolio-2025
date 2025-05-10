import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

export const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const selectHomepage = (state) => state.homepage;

export const { setTheme } = homepageSlice.actions;

export default homepageSlice.reducer;
