import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  webGHG: 0,
  laptopGHG: 0,
  totalGHG: 0,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addWebGHG(state, action) {
      state.webGHG += action.payload;
      state.totalGHG = state.laptopGHG + state.webGHG;
    },
    addLaptopGHG(state, action) {
      state.laptopGHG += action.payload;
      state.totalGHG = state.laptopGHG + state.webGHG;
    },
    clearGHG(state, action) {
      state.webGHG = 0;
      state.laptopGHG = 0;
      state.totalGHG = 0;
    },
  },
});

export const { addWebGHG, addLaptopGHG, clearGHG } = rootSlice.actions;

export default rootSlice.reducer;

const selectRoot = (state) => state.root;

export const selectWebGHG = createSelector(selectRoot, (root) => root.webGHG);
export const selectLaptopGHG = createSelector(
  selectRoot,
  (root) => root.laptopGHG
);
export const selectTotalGHG = createSelector(
  selectRoot,
  (root) => root.totalGHG
);
