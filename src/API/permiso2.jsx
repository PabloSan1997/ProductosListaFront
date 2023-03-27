import axios from 'axios';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export function usePermiso2() {
    const [per, setPer] = React.useState(false);
    const [cookie, setCookie] = useCookies(["ver"]);
    useEffect(() => {
        (async () => {
            try {
                const mandar = await axios.get(`https://mylista.onrender.com/api/v1/usuario/${cookie.ver}`);
                setPer(await mandar.data.estado);
            } catch (error) {
                console.log("No adentro");
            }
        })();
    }, []);
    return { per }
}