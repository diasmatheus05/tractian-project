import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
