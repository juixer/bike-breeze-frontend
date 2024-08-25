import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../Components/layouts/Dashboard";
import Profile from "../pages/dashboardPages/Profile";
import EditProfile from "../pages/dashboardPages/EditProfile";
import AvailableBikes from "../pages/AvailableBikes";
import BikeDetails from "../pages/BikeDetails";
import MyRental from "../pages/dashboardPages/user/MyRental";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div></div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-bikes",
        element: <AvailableBikes />,
      },
      {
        path: "/bike",
        element: <BikeDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div></div>,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      //   user
      {
        path: "available-bikes",
        element: <AvailableBikes />,
      },
      {
        path:"my-rentals",
        element:<MyRental/>
      }
    ],
  },
]);

export default router;
