import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const permisoAPi = createAsyncThunk("content/fetchContent", async (hola) => {
  try {
    const res = await axios.post("http://localhost:3001/api/v1/usuario", hola);
    const data = await res.data;
    return data;
  } catch (error) {
    return {message:""};
  }
});

const slicerPermiso = createSlice({
  initialState: [{ estado: false, message: "", entrar: false }],
  name: "permiso",
  extraReducers: (builder) => {
    builder.addCase(permisoAPi.fulfilled, (state, actions) => {
      state[0] = actions.payload;
    });
  },
});

const permisoReducer = slicerPermiso.reducer;
const { miralo } = slicerPermiso.actions;
export { permisoReducer, permisoAPi, miralo };
