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
import FindDoctorPages from "./pages/FindDoctorPages.tsx";
import BlogPages from "./pages/BlogPages.tsx";
import MainLayout from "./components/Mainlayouts.tsx";
import DetailDoctorPages from "./pages/DetailDoctorPages.tsx";
import ContactUsPages from "./pages/ContactUsPages.tsx";
import PricingPlanPages from "./pages/PricingPlanPages.tsx";
import DetailDepartmentsPages from "./pages/DetailDepartmentsPages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePages /> },
      { path: "/gallery", element: <GalleryPages /> },
      { path: "/departments", element: <DepartmentsPages /> },
      {path: "/departments/detail/:id", element: <DetailDepartmentsPages />},
      { path: "/pricing-plan", element: <PricingPlanPages /> },
      { path: "/about", element: <AboutPages /> },
      { path: "/doctor", element: <FindDoctorPages /> },
      { path: "/doctor/detail/:id", element: <DetailDoctorPages /> },
      { path: "/find-doctor", element: <FindDoctorPages /> },
      { path: "/blog", element: <BlogPages /> },
      { path: "/contact-us", element: <ContactUsPages /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
