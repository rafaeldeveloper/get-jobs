import React, { Suspense } from 'react';
import { Loading } from 'base';
import useContainer from './Container';
import { useRoutes } from 'hookrouter';


const AppRouter = () => {


    const { getRoutes } = useContainer();

    const routes = getRoutes();

    const routeResult = useRoutes(routes);


    return <Suspense fallback={<Loading />}>{routeResult}</Suspense>;
}



export default AppRouter;
