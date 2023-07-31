import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Success from "./pages/Success";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NewsLetter from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <NewsLetter />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
