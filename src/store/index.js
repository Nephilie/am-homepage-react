import { configureStore } from "@reduxjs/toolkit";

// merge all slice reducers here
import counterSlice from "./counter-slice";
import loaderSlice from "./loader-slice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, loader: loaderSlice.reducer  },
});

export default store;
