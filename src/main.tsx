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
import Blogs from "./Pages/Blogs";
import Research from "./Pages/Research";
import Achievements from "./Pages/Achievements";
import Error from "./Error/Error";
import { BlogProvider } from "./Context/BlogContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/research",
        element: <Research/>
      },{
        path: "/achievements",
        element: <Achievements/>
      }
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
        <BlogProvider>
          <RouterProvider router={router} />
        </BlogProvider> // Show the router after loading is done
      )}
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
