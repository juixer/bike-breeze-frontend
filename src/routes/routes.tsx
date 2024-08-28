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
import ProtectedRoute from "../Components/layouts/ProtectedRoute";
import ProtectedAdminRoute from "../Components/layouts/ProtectedAdminRoute";
import ErrorPage from "../pages/ErrorPage";
import WriteReview from "../pages/WriteReview";
import ReviewManagement from "../pages/dashboardPages/admin/ReviewManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/bike/:bikeID",
        element: (
          <ProtectedRoute>
            <BikeDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/write-review",
        element: (
          <ProtectedRoute>
            <WriteReview />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
      //   user
      {
        path: "available-bikes",
        element: (
          <ProtectedRoute>
            <AvailableBikes />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-rentals",
        element: (
          <ProtectedRoute>
            <MyRental />
          </ProtectedRoute>
        ),
      },
      //   admin
      {
        path: "all-bikes",
        element: (
          <ProtectedAdminRoute>
            <AllBikes />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "add-bike",
        element: (
          <ProtectedAdminRoute>
            <AddBike />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "update-bike/:bikeID",
        element: (
          <ProtectedAdminRoute>
            <UpdateBike />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "user-management",
        element: (
          <ProtectedAdminRoute>
            <UserManagement />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "return-bikes",
        element: (
          <ProtectedAdminRoute>
            <ReturnBike />
          </ProtectedAdminRoute>
        ),
      },
      {
        path: "review-management",
        element: (
          <ProtectedAdminRoute>
            <ReviewManagement />
          </ProtectedAdminRoute>
        ),
      },
    ],
  },
]);

export default router;
