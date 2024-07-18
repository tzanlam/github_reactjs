import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import RoomPage from "../Pages/RoomPage";
import AccountModal from "../Components/AccountModal";
import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "room",
        element: <RoomPage />,
      },
      {
        path: "signup",
        element: <AccountModal />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;