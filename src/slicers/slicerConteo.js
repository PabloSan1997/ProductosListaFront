import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mandarConteo } from "../API/mandarConteo";
 const llamarConteo = createAsyncThunk(
    'content/fetchContent',
    async () => {
     try {
        const res = await axios.get('http://localhost:3001/api/v1/conteo');
        const data = await res.data;
        return data.data;
     } catch (error) {
        return [];
     }
    }
  );
const slicerConteo = createSlice({
    name:"Conteo",
    initialState:{data:[], cambios:true},
    reducers:{
        mira:(state, action)=>{
            mandarConteo(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(llamarConteo.fulfilled, (state, action)=>{
            state.data=action.payload;
        });
        builder.addCase(llamarConteo.rejected, (state, action)=>{
            state.data=[];
        }
            );
    },
});

const reducerConteo = slicerConteo.reducer;
const {mira, agregado} = slicerConteo.actions;
export {reducerConteo, llamarConteo, mira, agregado}