import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  AboutUs,
  ContactUs,
  Gallery,
  Home,
  NotFound,
  Services,
  Team,
} from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:serviceId",
        element: <Services />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
