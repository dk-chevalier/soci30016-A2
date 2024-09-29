import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  webGHG: 0,
  laptopGHG: 0,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addWebGHG(state, action) {
      state.webGHG += action.payload;
    },
    addLaptopGHG(state, action) {
      state.laptopGHG += action.payload;
    },
  },
});

export const { addWebGHG, addLaptopGHG } = rootSlice.actions;

export default rootSlice.reducer;

const selectRoot = (state) => state.root;

export const selectWebGHG = createSelector(selectRoot, (root) => root.webGHG);
export const selectLaptopGHG = createSelector(
  selectRoot,
  (root) => root.laptopGHG
);
