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
import AllBikes from "../pages/dashboardPages/admin/AllBikes";
import AddBike from "../pages/dashboardPages/admin/AddBike";
import UpdateBike from "../pages/dashboardPages/admin/UpdateBike";
import UserManagement from "../pages/dashboardPages/admin/UserManagement";
import ReturnBike from "../pages/dashboardPages/admin/ReturnBike";

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
        path: "/available-bikes",
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
        path: "my-rentals",
        element: <MyRental />,
      },
      //   admin
      {
        path: "all-bikes",
        element: <AllBikes />,
      },
      {
        path: "add-bike",
        element: <AddBike />,
      },
      {
        path: "update-bike/:bikeID",
        element: <UpdateBike />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "return-bikes",
        element: <ReturnBike/>
      }
    ],
  },
]);

export default router;
