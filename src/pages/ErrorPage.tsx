import Lottie from "lottie-react";
import ErrorAni from "../assets/errorAni.json";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { basicBtnClassName } from "../constants";
import HelmetElement from "../utils/HelmetElement";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <HelmetElement text="Error"/>
      <div className="flex lg:flex-row flex-col gap-5">
        <div>
          <Lottie animationData={ErrorAni} loop={true} />
        </div>
        <div className="flex justify-center flex-col items-center gap-5">
          <h1 className="text-5xl font-semibold">Oops!</h1>
          <h1 className="text-3xl font-medium">Something went wrong</h1>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => navigate(-1)}
              className={`${basicBtnClassName} flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700`}
            >
              <FaArrowLeft /> Go Back
            </button>
            <NavLink to={"/"}>
              <button
                className={`${basicBtnClassName} flex items-center gap-2 bg-sky-600 text-white hover:bg-sky-700`}
              >
                <FaHouse /> Home
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
