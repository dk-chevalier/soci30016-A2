import { createSlice, createSelector } from "@reduxjs/toolkit";

const RELEASE_BUBBLE_AMOUNT = +import.meta.env.VITE_RELEASE_CO2_BUBBLE;

const initialState = {
  webGHG: 0,
  laptopGHG: 0,
  totalGHG: 0,
  count: RELEASE_BUBBLE_AMOUNT,
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
    addToCount(state, action) {
      state.count += action.payload;
    },
    clearGHG(state, action) {
      state.webGHG = 0;
      state.laptopGHG = 0;
      state.totalGHG = 0;
    },
  },
});

export const { addWebGHG, addLaptopGHG, addToCount, clearGHG } =
  rootSlice.actions;

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
export const selectCount = createSelector(selectRoot, (root) => root.count);
