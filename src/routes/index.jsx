import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "app", element: <About /> },
        { path: "settings", element: <Projects />},  
        { path: "notifications", element: <Contact />},
        // { path: "404", element: <Page404 /> },
        // { path: "*", element: <Navigate to="/404" replace />
      ],
    },   
    { path: "", element: <Navigate to="/404" replace /> },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
const About = Loadable(lazy(() => import("../pages/About")));
const Projects = Loadable(lazy(() => import("../pages/Projects")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
// const Page404 = Loadable(lazy(() => import("../pages/Page404")));
