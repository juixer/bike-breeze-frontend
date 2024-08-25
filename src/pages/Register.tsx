import { Link } from "react-router-dom";
import { basicBtnClassName } from "../constants";
import Headline from "../utils/Headline";

const Register = () => {
  return (
    <div className="space-y-5 my-5">
      <Headline text="register" />
      <form className="flex flex-col justify-center items-center w-full space-y-5">
        <input
          type="text"
          placeholder="Enter your name here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter your email here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter your password here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter your phone no. here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter your address here"
          className="input input-bordered  w-full lg:w-1/4 rounded-md"
        />
        <input
          type="file"
          className="file-input file-input-bordered file-input-info  w-full lg:w-1/4 rounded-md bgsky6"
        />

        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-1/4`}
        >
          Register
        </button>

        <div>
          <p>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-sky-700 font-semibold cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
