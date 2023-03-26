import { configureStore } from "@reduxjs/toolkit";
import { reducerConteo } from "../slicers/slicerConteo";
import { permisoReducer } from "../slicers/slicerPermiso";
export const store = configureStore({
  reducer: {
    conteo:reducerConteo,
    permiso:permisoReducer
  },
});
