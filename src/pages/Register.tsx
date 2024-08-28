import { Link, useNavigate } from "react-router-dom";
import { basicBtnClassName } from "../constants";
import Headline from "../utils/Headline";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import HelmetElement from "../utils/HelmetElement";
import FramerContainer from "../Components/layouts/FramerContainer";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please Wait...");
    try {
      const imgFile = data.profile_picture[0];
      let imgRes;
      if (imgFile) {
        const imgData = new FormData();
        imgData.append("image", imgFile);

        // UPLOADING IMAGE
        imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          imgData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      const userInfo = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
        phone: data.phone,
        address: data.address,
        profile_picture: imgRes?.data?.success
          ? imgRes.data.data.url
          : "https://i.ibb.co/Xjjd68g/default-user.jpg",
      };
      const registerResult = await registerUser(userInfo).unwrap();
      toast.success(registerResult.message, { id: toastId, duration: 3000 });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { id: toastId, duration: 3000 });
    }
  };

  return (
    <FramerContainer>
      <div className="space-y-5 my-5">
        <HelmetElement text="Register" />
        <Headline text="register" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full space-y-5"
        >
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your name here"
              {...register("name", { required: true })}
              className="input input-bordered  w-full rounded-md"
            />
            {errors.name && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email here"
              {...register("email", { required: true })}
              className="input input-bordered  w-full rounded-md"
            />
            {errors.email && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your password here"
              {...register("password", { required: true })}
              className="input input-bordered  w-full rounded-md"
            />
            {errors.password && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your phone no. here"
              {...register("phone", { required: true })}
              className="input input-bordered  w-full rounded-md"
            />
            {errors.phone && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter your address here"
              {...register("address", { required: true })}
              className="input input-bordered  w-full rounded-md"
            />
            {errors.address && (
              <span className="text-red-500">This Field is required</span>
            )}
          </div>

          <input
            type="file"
            {...register("profile_picture")}
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
    </FramerContainer>
  );
};
export default Register;
