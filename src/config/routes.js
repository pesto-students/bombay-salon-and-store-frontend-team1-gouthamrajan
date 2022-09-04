import React from "react";
import routePaths from "./route-paths";
import { useRoutes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import DashboardRoute from "../Components/Routes/DashboardRoute";

// const LoginRoute = lazy(() => import('@Components/Routes/LoginRoute'));

const RoutesArr = () => {
  /**
   * Every object here must use props that a react router "<Route>" expects.
   *
   * @see https://reacttraining.com/react-router/web/api/Route
   * @see https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config#route-configuration-shape
   *
   * @type {Array}
   */
  let childRoutes = [
    {
      element: <Layout />,
      children: [
        {
          path: routePaths.index,
          element: <DashboardRoute />,
        },
      ],
    },
  ];

  return useRoutes(childRoutes);
};

export default RoutesArr;
