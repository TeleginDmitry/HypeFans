import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegistrPage,
  CreationNewObject,
  Settings,
  Profile,
} from "../pages/index";
import { Layout } from "../components/layout/Layout";
import { AuthLayout } from "../components/layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreationNewObject />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrPage />,
      },
    ],
  },
]);
