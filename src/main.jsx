import { createRoot } from "react-dom/client";

import "./index.css";
import "./animation.css";

import App from "./App.jsx";
import Prouduct from "./page/Prouduct.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:id",
        element: <Prouduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
