import { useEffect, useState } from "react";
import {
  FaBars,
  FaCalendarCheck,
  FaCircleCheck,
  FaDoorOpen,
  FaHouse,
  FaMoon,
  FaMotorcycle,
  FaPen,
  FaPenToSquare,
  FaRegUser,
  FaStar,
  FaUserGroup,
} from "react-icons/fa6";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { FaPercentage } from "react-icons/fa";

const DashboardNav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lofi"
  );

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);



  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);

  let userRole
  if(!token){
    return <Navigate to={"/login"} replace={true} />;
  }else{
     userRole = verifyToken(token as string) as TUser;
  }

  const handleThemeToggle = () => {
    setTheme((activeTheme) => (activeTheme === "black" ? "lofi" : "black"));
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const adminNav = (
    <div className="space-y-5">
      {/* 02 */}
      <div className="space-y-2">
        <label className="font-bold ">Bike Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/all-bikes"}
          >
            <FaMotorcycle /> All Bikes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/add-bike"}
          >
            <FaPen /> Add Bike
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/return-bikes"}
          >
            <FaCircleCheck /> Return Bike
          </NavLink>
        </li>
      </div>
      {/* 03 */}
      <div className="space-y-2">
        <label className="font-bold ">User Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/user-management"}
          >
            <FaUserGroup /> User Management
          </NavLink>
        </li>
      </div>
      {/* 04 */}
      <div className="space-y-2">
        <label className="font-bold ">Review Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/review-management"}
          >
            <FaStar /> Review Management
          </NavLink>
        </li>
      </div>
      {/* 05 */}
      <div className="space-y-2">
        <label className="font-bold ">Coupon Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/coupon-management"}
          >
            <FaPercentage/> Coupon Management
          </NavLink>
        </li>
      </div>
    </div>
  );
  const userNav = (
    <div className="space-y-5">
      {/* 01 */}

      {/* 02 */}
      <div className="space-y-2">
        <label className="font-bold ">Bike Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/available-bikes"}
          >
            <FaMotorcycle /> Available Bikes
          </NavLink>
        </li>
      </div>
      {/* 03 */}
      <div className="space-y-2">
        <label className="font-bold ">Rental Management</label>
        <hr />
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/my-rentals"}
          >
            <FaCalendarCheck /> My Rentals
          </NavLink>
        </li>
      </div>
    </div>
  );

  return (
    <div className="lg:sticky lg:top-0">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-2 flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button w-full lg:hidden rounded-md"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div className="space-y-2 mb-2">
              <label className="font-bold">User Profile Management</label>
              <hr />
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:duration-300 text-base font-semibold ${
                      isActive && "bg-sky-500 bg-opacity-20"
                    }`
                  }
                  to={"/dashboard/profile"}
                >
                  <FaRegUser /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:duration-300 text-base font-semibold ${
                      isActive && "bg-sky-500 bg-opacity-20"
                    }`
                  }
                  to={"/dashboard/edit-Profile"}
                >
                  <FaPenToSquare /> Edit Profile
                </NavLink>
              </li>
            </div>
            {(userRole.role === "admin" || userRole.role === "superAdmin") && adminNav}
            {userRole.role === "user" && userNav}
            {/* 04 */}
            <div className="space-y-2 mt-2">
              <label className="font-bold">Quick Actions </label>
              <hr />
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:duration-300 text-base font-semibold ${
                      isActive && "bg-sky-500 bg-opacity-20"
                    }`
                  }
                  to={"/"}
                >
                  <FaHouse /> Home
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleThemeToggle}
                  className="hover:duration-300 text-base font-semibold hover:bg-black hover:bg-opacity-20"
                >
                  <FaMoon /> Dark Mode: {theme === "black" ? "On" : "Off"}
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="hover:duration-300 text-base font-semibold hover:bg-black hover:bg-opacity-20"
                >
                  <FaDoorOpen /> Log Out
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DashboardNav;
