import { FaStar } from "react-icons/fa6";
import { TReviewInfo } from "./VerifiedReviewTable";
import { basicBtnClassName } from "../../constants";
import Swal from "sweetalert2";
import { toast } from "sonner";
import {
  useDeleteReviewMutation,
  useVerifyReviewMutation,
} from "../../redux/features/review/review.api";

const NonVerifiedReviewTable = ({
  nonVerified,
}: {
  nonVerified: TReviewInfo;
}) => {
  const [deleteReview] = useDeleteReviewMutation();
  const [verifyReview] = useVerifyReviewMutation();

  const handleVerify = async (reviewId: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to verify this review",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, verify!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const verifyResult = await verifyReview(reviewId).unwrap();

          Swal.fire({
            title: "verified!",
            text: `${verifyResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };
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
      <td className="min-w-40">{nonVerified.name}</td>
      <td className="min-w-40">{nonVerified.bikeName}</td>
      <td className="min-w-40 flex items-center gap-2">
        <FaStar />
        {nonVerified.rating}
      </td>
      <td className="max-w-72">{nonVerified.comment}</td>
      <td>
        <button
          onClick={() => handleVerify(nonVerified._id)}
          className={`${basicBtnClassName} bg-sky-600 text-white duration-300 hover:bg-sky-700`}
        >
          Verify
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(nonVerified._id)}
          className={`${basicBtnClassName} bg-red-600 text-white duration-300 hover:bg-red-900`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default NonVerifiedReviewTable;
