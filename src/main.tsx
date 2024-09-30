import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Mainlayouts.tsx";
import "./index.css";
import AboutPages from "./pages/AboutPages.tsx";
import BlogPages from "./pages/BlogPages.tsx";
import ContactUsPages from "./pages/ContactUsPages.tsx";
import DepartmentsPages from "./pages/DepartmentsPages.tsx";
import DetailDepartmentsPages from "./pages/DetailDepartmentsPages.tsx";
import DetailDoctorPages from "./pages/DetailDoctorPages.tsx";
import FindDoctorPages from "./pages/FindDoctorPages.tsx";
import GalleryPages from "./pages/GalleryPages.tsx";
import HomePages from "./pages/HomePages.tsx";
import PricingPlanPages from "./pages/PricingPlanPages.tsx";
import store from "./redux/store/Store.ts";
import AppointmentPages from "./pages/AppointmentPages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePages /> },
      { path: "/gallery", element: <GalleryPages /> },
      { path: "/departments", element: <DepartmentsPages /> },
      { path: "/departments/detail/:id", element: <DetailDepartmentsPages /> },
      { path: "/pricing-plan", element: <PricingPlanPages /> },
      { path: "/about", element: <AboutPages /> },
      { path: "/doctor", element: <FindDoctorPages /> },
      { path: "/doctor/detail/:id", element: <DetailDoctorPages /> },
      { path: "/find-doctor", element: <FindDoctorPages /> },
      { path: "/blog", element: <BlogPages /> },
      { path: "/contact-us", element: <ContactUsPages /> },
      {path: "/appointment", element: <AppointmentPages />}
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
