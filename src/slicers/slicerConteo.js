import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { borrarConte } from "../API/borrarConteo";
import { mandarConteo } from "../API/mandarConteo";
 const llamarConteo = createAsyncThunk(
    'content/fetchContent',
    async () => {
     try {
        const res = await axios.get('https://mylista.onrender.com/api/v1/conteo');
        const data = await res.data;
        return data.data;
     } catch (error) {
        return [];
     }
    }
  );
const slicerConteo = createSlice({
    name:"Conteo",
    initialState:{data:[], cambios:true, loading:true},
    reducers:{
        mira:(state, action)=>{
            mandarConteo(action.payload);
        },
        borrarCon:(state, action)=>{
            borrarConte(action.payload.accion);

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(llamarConteo.fulfilled, (state, action)=>{
            state.data=action.payload;
            state.loading=false;
        });
        builder.addCase(llamarConteo.rejected, (state, action)=>{
            state.data=[];
            state.loading=false;
        });
        builder.addCase(llamarConteo.pending, (state, action)=>{
            state.loading=true
        }
        );
    },
});

const reducerConteo = slicerConteo.reducer;
const {mira, agregado, borrarCon} = slicerConteo.actions;
export {reducerConteo, llamarConteo, mira, agregado, borrarCon}