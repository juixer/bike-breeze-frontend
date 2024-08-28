import { useNavigate, useParams } from "react-router-dom";
import { basicBtnClassName } from "../../../constants";
import Headline from "../../../utils/Headline";
import {
  useGetSingleBikeInfoQuery,
  useUpdateBikeInfoMutation,
} from "../../../redux/features/admin/bikesApi";
import Loading from "../../../utils/Loading";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import HelmetElement from "../../../utils/HelmetElement";
import FramerContainer from "../../../Components/layouts/FramerContainer";

const UpdateBike = () => {
  const { bikeID } = useParams();
  const navigate = useNavigate();

  const [updateBike] = useUpdateBikeInfoMutation();
  const { data: bike, isLoading } = useGetSingleBikeInfoQuery(bikeID);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please Wait...");
    try {
      const imgFile = data.image[0];
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

      const bikeInfo = {
        id: bikeID,
        data: {
          name: data.name,
          brand: data.brand,
          model: data.model,
          pricePerHour: Number(data.pricePerHour),
          cc: Number(data.cc),
          year: Number(data.year),
          description: data.description,
          image: imgRes?.data?.data?.url,
        },
      };

      const updateResult = await updateBike(bikeInfo).unwrap();
      toast.success(updateResult.message, { id: toastId, duration: 3000 });
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { id: toastId, duration: 3000 });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <FramerContainer>
      <div className="space-y-5 my-5">
        <HelmetElement text="Update bike" />
        <Headline text="Update Bike" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full space-y-5"
        >
          <input
            type="text"
            defaultValue={bike.data.name}
            {...register("name")}
            placeholder="Enter bike name here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <input
            type="text"
            defaultValue={bike.data.brand}
            {...register("brand")}
            placeholder="Enter bike brand here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <input
            type="text"
            {...register("model")}
            defaultValue={bike.data.model}
            placeholder="Enter bike model here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <input
            type="number"
            defaultValue={bike.data.pricePerHour}
            {...register("pricePerHour")}
            placeholder="Enter bike price here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <input
            type="number"
            defaultValue={bike.data.cc}
            {...register("cc")}
            placeholder="Enter bike cc here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <input
            type="number"
            defaultValue={bike.data.year}
            {...register("year")}
            placeholder="Enter bike release year here"
            className="input input-bordered  w-full lg:w-2/4 rounded-md"
          />
          <textarea
            defaultValue={bike.data.description}
            {...register("description")}
            className="textarea textarea-bordered w-full lg:w-2/4 rounded-md h-32"
            placeholder="Enter bike description"
          ></textarea>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered file-input-info  w-full lg:w-2/4 rounded-md bgsky6"
          />

          <button
            className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
          >
            Update
          </button>
        </form>
      </div>
    </FramerContainer>
  );
};
export default UpdateBike;
