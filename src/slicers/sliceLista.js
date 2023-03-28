import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { borrarLista } from "../API/borrarLista";
import { mandarLista } from "../API/mandarLista";
 const llamarLista = createAsyncThunk(
    'content/fetchContent',
    async () => {
     try {
        const res = await axios.get('https://mylista.onrender.com/api/v1/lista/');
        const data = await res.data;
        return data.data;
     } catch (error) {
        return [];
     }
    }
  );
const slicerLista = createSlice({
    name:"Lista",
    initialState:{data:[], cambios:true, loading:true},
    reducers:{
        miraLista:(state, action)=>{
            mandarLista(action.payload);
        },
        borrarConLista:(state, action)=>{
            borrarLista(action.payload.accion);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(llamarLista.fulfilled, (state, action)=>{
            state.data=action.payload;
            state.loading=false;
        });
        builder.addCase(llamarLista.rejected, (state, action)=>{
            state.data=[];
            state.loading=false;
        });
        builder.addCase(llamarLista.pending, (state, action)=>{
            state.loading=true
        }
        );
    },
});

const reducerLista = slicerLista.reducer;
const {miraLista, borrarConLista} = slicerLista.actions;
export {reducerLista, llamarLista, miraLista, borrarConLista}