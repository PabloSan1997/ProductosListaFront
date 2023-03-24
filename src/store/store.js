import { configureStore } from "@reduxjs/toolkit";
import { reducerConteo } from "../slicers/slicerConteo";

export const store = configureStore({
  reducer: {
    conteo: reducerConteo,
  },
});
