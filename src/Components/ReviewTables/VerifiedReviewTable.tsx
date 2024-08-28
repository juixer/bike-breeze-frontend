import { FaStar } from "react-icons/fa6";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { basicBtnClassName } from "../../constants";
import { useDeleteReviewMutation } from "../../redux/features/review/review.api";

export type TReviewInfo = {
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
  name: string;
  bikeName: string;
  comment: string;
  image: string;
  rating: number;
  verified: boolean;
};

const VerifiedReviewTable = ({ verified }: { verified: TReviewInfo }) => {
  const [deleteReview] = useDeleteReviewMutation();

  const handleDelete = async (reviewId: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleteResult = await deleteReview(reviewId).unwrap();

          Swal.fire({
            title: "Deleted!",
            text: `${deleteResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };
  return (
    <tr className="hover">
      <td className="min-w-40">{verified.name}</td>
      <td className="min-w-40">{verified.bikeName}</td>
      <td className="min-w-40 flex items-center gap-2">
        <FaStar />
        {verified.rating}
      </td>
      <td className="max-w-72">{verified.comment}</td>
      <td>
        <button
          onClick={() => handleDelete(verified._id)}
          className={`${basicBtnClassName} bg-red-600 text-white duration-300 hover:bg-red-900`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default VerifiedReviewTable;
