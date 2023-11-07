import { RouteProps } from 'react-router-dom';
import { InfluencersPage } from 'pages/InfluencersPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    INFLUENCERS = 'influencers',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.INFLUENCERS]: '/influencers',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.INFLUENCERS]: {
        path: RoutePath.influencers,
        element: <InfluencersPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
