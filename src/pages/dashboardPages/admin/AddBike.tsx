import { useNavigate } from "react-router-dom";
import { basicBtnClassName } from "../../../constants";
import { useAddBikeMutation } from "../../../redux/features/admin/bikesApi";
import Headline from "../../../utils/Headline";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";

const AddBike = () => {
  const [addBike] = useAddBikeMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

      if (imgRes?.data?.success) {
        const bikeInfo = {
          name: data.name,
          brand: data.brand,
          model: data.model,
          pricePerHour: Number(data.pricePerHour),
          cc: Number(data.cc),
          year: Number(data.year),
          description: data.description,
          image: imgRes.data.data.url,
        };

        const bikeResult = await addBike(bikeInfo).unwrap();
        toast.success(bikeResult.message, { duration: 3000, id: toastId });
        navigate('/dashboard/all-bikes')
      } else {
        toast.warning("uploading image failed..", {
          duration: 300,
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong", { duration: 3000, id: toastId });
    }
  };

  return (
    <div className="space-y-5 my-5">
      <Headline text="Add Bike" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full space-y-5"
      >
        <input
          type="text"
          placeholder="Enter bike name here"
          {...register("name", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike brand here"
          {...register("brand", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike model here"
          {...register("model", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike price here"
          {...register("pricePerHour", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike cc here"
          {...register("cc", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike release year here"
          {...register("year", { required: true })}
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <textarea
          className="textarea textarea-bordered w-full lg:w-2/4 rounded-md h-32"
          {...register("description", { required: true })}
          placeholder="Enter bike description"
        ></textarea>
        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered file-input-info  w-full lg:w-2/4 rounded-md bgsky6"
        />

        <div className="w-full lg:w-2/4 flex flex-col">
          {errors.name && (
            <span className="text-red-500">Please enter bike name</span>
          )}
          {errors.brand && (
            <span className="text-red-500">Please enter bike brand</span>
          )}
          {errors.model && (
            <span className="text-red-500">Please enter bike model</span>
          )}
          {errors.pricePerHour && (
            <span className="text-red-500">
              Please enter bike price per hour
            </span>
          )}
          {errors.cc && (
            <span className="text-red-500">Please enter bike cc</span>
          )}
          {errors.year && (
            <span className="text-red-500">Please enter bike release year</span>
          )}
          {errors.description && (
            <span className="text-red-500">Please enter bike description</span>
          )}
          {errors.image && (
            <span className="text-red-500">Please provide bike image</span>
          )}
        </div>
        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
        >
          Add Bike
        </button>
      </form>
    </div>
  );
};
export default AddBike;
