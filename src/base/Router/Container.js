import Modules from 'modules';
import React from "react";


const useContainer = () => {

    const routes = {};

    
    const getRouteNameByModule = (str) => str.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return `-${y.toLowerCase()}` }).replace(/^-/, "");

    const getRoutes = () => {
        
        Object.entries(Modules.Private).map(([key, mod]) => {
            const Module = mod;
            const route = getRouteNameByModule(key);
            routes[`/${route}*`] = () => <Secure><Module /></Secure>;
            return Module
        });


        return routes;
    };

    const authenticated  = () => true;


    const Secure = ({ children }) => {

        if (!authenticated()) {
            // unnautenticad Route
        }

        return children
    }



    return {
        getRoutes
    }
}

export default useContainer