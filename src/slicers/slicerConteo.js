import { createSlice } from "@reduxjs/toolkit";

const slicerConteo = createSlice({
    name:"Conteo",
    initialState:[{hola:"adios"}],
    reducers:{
        hola(state, action){
            console.log(state);
        }
    }
});

const reducerConteo = slicerConteo.reducer;
const {hola}=slicerConteo.actions;
export {reducerConteo, hola}