import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePages from "./pages/HomePages.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/Store.ts";
import GalleryPages from "./pages/GalleryPages.tsx";
import AboutPages from "./pages/AboutPages.tsx";
import DepartmentsPages from "./pages/DepartmentsPages.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/gallery",
    element: <GalleryPages />
  },
  {
    path: "/departments",
    element: <DepartmentsPages />
  },
  {
    path: "/about",
    element: <AboutPages />
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
