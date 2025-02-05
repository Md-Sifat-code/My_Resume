import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main_layout from "./MainLayout/Main_layout";
import Home from "./Comeponent/Home";
import Loading from "./Loading/Loading"; // Import the loading component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = React.useState(true);

  // Set timeout to stop loading after 4 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loading /> // Show the loading screen while loading
      ) : (
        <RouterProvider router={router} /> // Show the router after loading is done
      )}
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
