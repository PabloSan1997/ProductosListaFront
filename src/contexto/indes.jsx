import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { usePermiso1 } from "../API/permiso";
import { usePermiso2 } from "../API/permiso2";

const Contexto = createContext();

export function ProvedorContexto({children}){
    const {setSolicitud} = usePermiso1();
    const {per}=usePermiso2();
    return(
        <Contexto.Provider
        value={
            {
                setSolicitud,
                per
            }
        }
        >
            {children}
        </Contexto.Provider>
    );
}

export function useContexto(){
    const auth = useContext(Contexto);
    return auth;
}