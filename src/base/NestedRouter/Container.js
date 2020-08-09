import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';

const getRouteNameByModule = (str) => str.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return `-${y.toLowerCase()}` }).replace(/^-/, "");

export default (props) => {
    const { Modules, defaultModule } = props;

    const routes = Object.keys(Modules).map(key => {
        const Module = Modules[key];
        const route = getRouteNameByModule(key);
        const result = { [`/${route}*`]: () => <Module {...props} /> };
        return result;
    }).reduce((acc, curr) => ({...acc, ...curr}));

    const routesMatcher = useRoutes(routes);


    useRedirect('/', defaultModule || '/vacancies');

    return { 
        routesMatcher 
    };
};