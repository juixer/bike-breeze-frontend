import { FieldValues, useForm } from "react-hook-form";
import Headline from "../utils/Headline";
import { basicBtnClassName } from "../constants";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useWriteReviewMutation } from "../redux/features/review/review.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetBikeBrandQuery } from "../redux/features/admin/bikesApi";
import Loading from "../utils/Loading";
import { TBrand } from "./dashboardPages/admin/AllBikes";

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [bikeName, setBikeName] = useState("");

  const [WriteReview] = useWriteReviewMutation();
  const { data: brands, isLoading } = useGetBikeBrandQuery(undefined);

  const navigate = useNavigate();

  const handleName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBikeName(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const reviewInfo = {
      comment: data.comment,
      rating: rating,
      bikeName,
    };

    try {
      const reviewResult = await WriteReview(reviewInfo).unwrap();
      toast.success(reviewResult.message, { duration: 3000 });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { duration: 3000 });
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
    <div className="space-y-5 my-5">
      <Headline text="Write a review" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  items-center w-full space-y-5"
      >
        <Rating
          style={{ maxWidth: 180 }}
          value={rating}
          onChange={setRating}
          isRequired
        />

        <select
          onChange={handleName}
          className="select select-bordered w-full max-w-xs rounded-md"
        >
          <option selected disabled value={""}>
            Select Bike
          </option>
          ;
          {brands.data.map((brand: TBrand, i: string) => {
            return (
              <option value={brand.name} key={i}>
                {brand.name}
              </option>
            );
          })}
        </select>

        <textarea
          className="textarea textarea-bordered w-full lg:w-2/4 rounded-md h-32"
          {...register("comment", { required: true })}
          placeholder="Enter your comment..."
        ></textarea>
        {errors.comment && (
          <span className="text-red-500">Please enter your comment</span>
        )}
        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default WriteReview;
