import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lofi"
  );

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);

  const user = useAppSelector((state) => state.auth.user);

  
  const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("lofi");
    }
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:duration-300 text-base lg:text-xl font-semibold ${
              isActive && "bg-sky-500 bg-opacity-20"
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:duration-300 text-base lg:text-xl font-semibold ${
                isActive && "bg-sky-500 bg-opacity-20"
              }`
            }
            to={"/dashboard/profile"}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:duration-300 text-base lg:text-xl font-semibold ${
              isActive && "bg-sky-500 bg-opacity-20"
            }`
          }
          to={"/available-bikes"}
        >
          Available Bikes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:duration-300 text-base lg:text-xl font-semibold ${
              isActive && "bg-sky-500 bg-opacity-20"
            }`
          }
          to={"/about"}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to={"/"}>
          <img src="https://i.ibb.co/JrYxbpg/Logo.png" className="w-32" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        {<ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>}
      </div>
      <div className="navbar-end gap-3">
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleThemeToggle}
            type="checkbox"
            checked={theme === "black"}
            className="toggle rounded-full theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {user ? (
          <button
            onClick={handleLogOut}
            className={`${basicBtnClassName} bg-red-500 text-white hover:bg-red-900 duration-300`}
          >
            Log Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              className={`${basicBtnClassName} bg-sky-600 text-white hover:bg-sky-700 duration-300`}
            >
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
