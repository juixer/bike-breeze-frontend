import Swal from "sweetalert2";
import { basicBtnClassName } from "../../constants";
import { toast } from "sonner";
import {
  useDeleteCouponMutation,
  useActiveCouponMutation,
  useDisableCouponMutation,
} from "../../redux/features/coupon/couponApi";

export type TCoupon = {
  name: string;
  coupon: string;
  percent: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

const CouponTables = ({ coupon }: { coupon: TCoupon }) => {
  const [disableCoupon] = useDisableCouponMutation();
  const [activeCoupon] = useActiveCouponMutation();
  const [deleteCoupon] = useDeleteCouponMutation();

  const handleDisable = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You can revert this later!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, disable it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const disableResult = await disableCoupon(id).unwrap();

          Swal.fire({
            title: "Disabled!",
            text: `${disableResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };

  const handleActive = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You can revert this later!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, active it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const activeResult = await activeCoupon(id).unwrap();

          Swal.fire({
            title: "Activated!",
            text: `${activeResult.message}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong..", { duration: 3000 });
    }
  };
  const handleDelete = async (id: string) => {
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
          const deleteResult = await deleteCoupon(id).unwrap();

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
      <td className="min-w-40">{coupon.name}</td>
      <td className="min-w-40">{coupon.coupon}</td>
      <td className="min-w-40">{coupon.percent}%</td>
      <td>
        {coupon.isAvailable === true && (
          <button
            onClick={() => handleDisable(coupon._id)}
            className={`${basicBtnClassName} bg-sky-500 duration-300 text-white hover:bg-sky-600 
            } `}
          >
            Disable
          </button>
        )}
        {coupon.isAvailable === false && (
          <button
            onClick={() => handleActive(coupon._id)}
            className={`${basicBtnClassName} bg-sky-500 duration-300 text-white hover:bg-sky-600 
            } `}
          >
            Active
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(coupon._id)}
          className={`${basicBtnClassName} bg-red-600 duration-300 text-white hover:bg-red-900`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default CouponTables;
