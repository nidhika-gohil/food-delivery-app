import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RetaurantMenu from "./src/components/RetaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
// import Grocery from "./src/components/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="main-container app">
        <Heading />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: <RetaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRoute} />);
