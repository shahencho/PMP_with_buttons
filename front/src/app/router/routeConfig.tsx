import { RouteProps } from "react-router-dom";
import { InfluencersPage } from "pages/InfluencersPage";
import { InfluencerPage } from "pages/InfluencerPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  INFLUENCERS = "influencers",
  INFLUENCER = "influencer_details",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.INFLUENCERS]: "/influencers",
  [AppRoutes.INFLUENCER]: "/influencers/",
  // последний
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.INFLUENCERS]: {
    path: RoutePath.influencers,
    element: <InfluencersPage />,
  },
  [AppRoutes.INFLUENCER]: {
    path: `${RoutePath.influencer_details}:name_from_url`,
    element: <InfluencerPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
