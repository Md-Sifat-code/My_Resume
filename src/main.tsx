import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main_layout from "./MainLayout/Main_layout";
import Home from "./Comeponent/Home";

// Create a router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
]);

// Find the root element and render the RouterProvider
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
