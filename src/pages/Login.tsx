import React, { useState } from "react";
import Headline from "../utils/Headline";
import { basicBtnClassName } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const loginResult = await loginUser(userInfo).unwrap();
      toast.success(loginResult.message,{id:toastId, duration:3000})
      navigate('/dashboard/profile')
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { duration: 3000, id: toastId });
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
    <div className="my-5 space-y-5">
      <Headline text="Login" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full space-y-3"
      >
        <input
          type="email"
          placeholder="Enter your email here"
          {...register("email", { required: true })}
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password here"
          {...register("password", { required: true })}
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
        <div className="w-full lg:w-1/4 flex flex-col">
          {errors.email && (
            <span className="text-red-500">Please enter your email</span>
          )}
          {errors.password && (
            <span className="text-red-500">Please enter your password</span>
          )}
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
  );
};
export default Login;
