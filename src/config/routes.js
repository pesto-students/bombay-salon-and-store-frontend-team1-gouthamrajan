import React from "react";
import routePaths from "./route-paths";
import { useRoutes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import DashboardRoute from "../Components/Routes/DashboardRoute";
import OrderPlacedRoute from "../Components/Routes/OrderPlacedRoute";
import MyOrderRoute from "../Components/Routes/MyOrderRoute";
import ContactUsRoute from "../Components/Routes/ContactUsRoute";

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
        {
          path: routePaths.orderPlaced,
          element: <OrderPlacedRoute />,
        },
        {
          path: routePaths.myOrders,
          element: <MyOrderRoute />,
        },
        {
          path: routePaths.contactUs,
          element: <ContactUsRoute />,
        },
      ],
    },
  ];

  return useRoutes(childRoutes);
};

export default RoutesArr;
