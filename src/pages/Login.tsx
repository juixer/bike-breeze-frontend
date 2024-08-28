import React, { useState } from "react";
import Headline from "../utils/Headline";
import { basicBtnClassName } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import HelmetElement from "../utils/HelmetElement";
import FramerContainer from "../Components/layouts/FramerContainer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const userInfo = {
        email: data.email.toLowerCase(),
        password: data.password,
      };

      const loginResult = await loginUser(userInfo).unwrap();
      const user = verifyToken(loginResult.token);
      dispatch(setUser({ user: user, token: loginResult.token }));
      toast.success(loginResult.message, { id: toastId, duration: 3000 });
      navigate(location.state ? location.state : "/dashboard/profile");
    } catch (error) {
      console.log(error);
      toast.warning("Email or Password might be incorrect!", {
        duration: 3000,
        id: toastId,
      });
    }
  };

  const handleShowPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <FramerContainer>
      <div className="my-5 space-y-5">
        <HelmetElement text="Login" />
        <Headline text="Login" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full space-y-3"
        >
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email here"
              {...register("email", { required: true })}
              className="input input-bordered  w-full  rounded-md"
            />
            {errors.email && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password here"
            {...register("password", { required: true })}
            className="input input-bordered  w-full rounded-md"
          />
            {errors.password && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>
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
              <Link to={"/register"}>
                <span className="text-sky-700 font-semibold cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </FramerContainer>
  );
};
export default Login;
