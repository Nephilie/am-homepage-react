import { createSlice } from "@reduxjs/toolkit";

const initialLoaderState = { isLoading: false };

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialLoaderState,
  reducers: {
    idle(state) {
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = false;
    },
    success(state) {
        state.isLoading =
    },
    failed(state) {
        state.isLoading =
    },
  },
});

export const loadActions = loaderSlice.actions;

export default loaderSlice;
