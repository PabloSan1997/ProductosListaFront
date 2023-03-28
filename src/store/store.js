import { configureStore } from "@reduxjs/toolkit";
import { reducerLista } from "../slicers/sliceLista";
import { reducerConteo } from "../slicers/slicerConteo";

export const store = configureStore({
  reducer: {
    conteo:reducerConteo,
    lista:reducerLista
  },
});
