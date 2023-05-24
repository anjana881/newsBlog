import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Fetch from "./pages/Fetch";
import Butt from "./pages/Butt";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  // {
  //     path: "about",
  //     element: <About />,
  //     children: [
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "Home",
  //     element: <Home />,

  //     children: [
  //       {
  //         path: "home",
  //         element: <Home />,
  //       },
  //     ],
  //   },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="contact" element={<Contact />} />
//       <Route path="about" element={<About />} />

//     </Route>
//   )
// );
export default router;
