import { useState } from "react";
import { basicBtnClassName } from "../../constants";
import { useUserCouponPaymentMutation, useUserPaymentMutation } from "../../redux/features/rentalApi/rentalAPi";
import { toast } from "sonner";

const ApplyCouponModal = ({ id }: { id: string }) => {
  const [coupon, setCoupon] = useState("");
  const [apply, setApply] = useState(false);
  const [userPayment] = useUserPaymentMutation();
  const [userCouponPayment] = useUserCouponPaymentMutation();
  const handleApplyCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };
  const handleApply = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setApply(true);
    } else {
      setApply(false);
    }
  };

  const handleCouponPayment = async (id: string) => {
    try {
      const couponInfo = {
        id,
        coupon,
      };
      const paymentResult = await userCouponPayment(couponInfo).unwrap();
      console.log(paymentResult);
      toast.loading("Please wait...", { duration: 5000 });
      if (paymentResult.success) {
        window.location.href = paymentResult.data.payment_url;
      } else {
        toast.error("Failed the payment process");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...", { duration: 3000 });
    }
  };
  const handlePayment = async (id: string) => {
    try {
      
      const paymentResult = await userPayment(id).unwrap();
      console.log(paymentResult);
      toast.loading("Please wait...", { duration: 5000 });
      if (paymentResult.success) {
        window.location.href = paymentResult.data.payment_url;
      } else {
        toast.error("Failed the payment process");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...", { duration: 3000 });
    }
  };
  return (
    <>
      <button
        className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white duration-300`}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        Pay
      </button>

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p className="py-4">Press ESC key or click outside to close</p>

          <div className="flex items-center gap-2 mb-2">
            <input
              onChange={handleApply}
              type="checkbox"
              id="apply"
              className="checkbox rounded-md"
            />
            <label className="checkbox-label" htmlFor="apply">
              Apply Coupon
            </label>
          </div>
          {/* Input field */}
          <input
            id="couponInput"
            type="text"
            onChange={handleApplyCoupon}
            placeholder="Enter coupon code"
            className={`input input-bordered w-full rounded-md mb-4 ${
              apply ? "block" : "hidden"
            }`}
          />

          {apply ? (
            <button
              onClick={() => handleCouponPayment(id)}
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full`}
            >
              Apply
            </button>
          ) : (
            <button
              onClick={() => handlePayment(id)}
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full`}
            >
              {apply ? "Apply" : "pay"}
            </button>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
export default ApplyCouponModal;
