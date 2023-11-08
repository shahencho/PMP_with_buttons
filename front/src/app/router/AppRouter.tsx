import  { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from "react-router-dom";
import { RouteProps } from 'react-router-dom';

import { routeConfig } from './routeConfig';


const AppRouterImp = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={"Загрузка"}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export const AppRouter = memo(AppRouterImp);