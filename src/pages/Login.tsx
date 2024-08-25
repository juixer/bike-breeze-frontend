import React, { useState } from "react";
import Headline from "../utils/Headline";
import { basicBtnClassName } from "../constants";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="my-5 space-y-5">
      <Headline text="Login" />
      <form className="flex flex-col justify-center items-center w-full space-y-5">
        <input
          type="email"
          placeholder="Enter your email here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <div className="w-full lg:w-1/4 flex flex-row items-center gap-2">
          <input
            onChange={handleShowPassChange}
            type="checkbox"
            id="showPass"
            className="checkbox rounded"
          />
          <label className="checkbox-label" htmlFor="showPass">
            Show Password
          </label>
        </div>

        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-1/4`}
        >
          Log In
        </button>

        <div>
          <p>
            Don't have an account?{" "}
            <Link to={'/register'}>
              <span className="text-sky-700 font-semibold cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
