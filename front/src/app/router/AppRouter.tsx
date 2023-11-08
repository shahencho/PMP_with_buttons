import  { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from "react-router-dom";
import { RouteProps } from 'react-router-dom';

import { routeConfig } from './routeConfig';
import { Layout } from 'widgets/Layout';


const AppRouterImp = () => {


    return (
        <Routes>
            <Route
                key={routeConfig.influencers.path}
                path={routeConfig.influencers.path}
                element={<Layout sidebar={true} navbar={true} />}
            >
            <Route
                key={routeConfig.influencers.path}
                path={routeConfig.influencers.path}
                element={<Suspense fallback={"Загрузка"}>
                    {routeConfig.influencers.element}
                </Suspense>}
            />
            </Route>
            <Route
                key={routeConfig.not_found.path}
                path={routeConfig.not_found.path}
                element={<Suspense fallback={"Загрузка"}>
                    {routeConfig.not_found.element}
                </Suspense>}
            />
        </Routes>
    );
};

export const AppRouter = memo(AppRouterImp);