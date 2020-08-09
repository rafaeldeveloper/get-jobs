import React, { Suspense } from 'react';
import Loading  from 'base/Loading';
import useContainer from './Container';
import { useRoutes, useRedirect } from 'hookrouter';


const AppRouter = () => {


    const { getRoutes } = useContainer();

    const routes = getRoutes();

    const routeResult = useRoutes(routes);
    useRedirect('/', '/vacancy/list');



    return <Suspense fallback={<Loading />}>{routeResult}</Suspense>;
}



export default AppRouter;
