import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegistrPage } from "../pages/index";
import { Layout, LayoutAuth } from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registr",
        element: <RegistrPage />,
      },
    ],
  },
]);
