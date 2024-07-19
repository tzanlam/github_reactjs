import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/AccountPage/HomePage";
import AboutUsPage from "../pages/AccountPage/AboutUs";
import AccountPage from "../pages/AccountPage/AccountPage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/AccountPage/login";
import SignUp from "../pages/AccountPage/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
