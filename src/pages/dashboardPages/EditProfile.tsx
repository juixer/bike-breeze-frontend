import { FieldValues, useForm } from "react-hook-form";
import { basicBtnClassName } from "../../constants";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../redux/features/user/userApi";
import Headline from "../../utils/Headline";
import Loading from "../../utils/Loading";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HelmetElement from "../../utils/HelmetElement";
import FramerContainer from "../../Components/layouts/FramerContainer";

const EditProfile = () => {
  const { data: userInfo, isLoading } = useGetUserProfileQuery(undefined);
  const [updateUser] = useUpdateUserProfileMutation();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

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
        email: data.email,
        password: data.password,
        phone: data.phone,
        address: data.address,
        profile_picture: imgRes?.data?.data?.url,
      };
      const updateResult = await updateUser(userInfo).unwrap();
      toast.success(updateResult.message, { id: toastId, duration: 3000 });
      navigate("/dashboard/profile");
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { id: toastId, duration: 3000 });
    }
  };

  return (
    <FramerContainer>
      <>
        {isLoading ? (
          <div className="min-h-[95vh] flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="space-y-5 my-5">
            <HelmetElement text="Edit Profile" />
            <Headline text="edit profile" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  items-center w-full space-y-5"
            >
              <input
                type="text"
                placeholder="Enter your name here"
                defaultValue={userInfo.data.name}
                {...register("name")}
                className="input input-bordered  w-full lg:w-2/4 rounded-md"
              />
              <input
                type="email"
                placeholder="Enter your email here"
                defaultValue={userInfo.data.email}
                disabled
                className="input input-bordered  w-full lg:w-2/4 rounded-md"
              />
              <input
                type="text"
                placeholder="Enter your phone no. here"
                defaultValue={userInfo.data.phone}
                {...register("phone")}
                className="input input-bordered  w-full lg:w-2/4 rounded-md"
              />
              <input
                type="text"
                placeholder="Enter your address here"
                defaultValue={userInfo.data.address}
                {...register("address")}
                className="input input-bordered  w-full lg:w-2/4 rounded-md"
              />
              <input
                type="file"
                {...register("profile_picture")}
                className="file-input file-input-bordered file-input-info  w-full lg:w-2/4 rounded-md bgsky6"
              />

              <button
                className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
              >
                Update Profile
              </button>
            </form>
          </div>
        )}
      </>
    </FramerContainer>
  );
};
export default EditProfile;
