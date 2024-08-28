import { toast } from "sonner";
import { TCoupon } from "../Components/CouponTables/CouponTables";
import { basicBtnClassName } from "../constants";

const CouponCard = ({ coupon }: { coupon: TCoupon }) => {
  return (
    <>
      {" "}
      <div className="card bg-base-100 image-full w-96 shadow-xl m-5">
        <figure>
          <img
            src="https://i.ibb.co/Tw2YqH2/coupon-removebg-preview.png"
            alt="Coupon Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{coupon.name}</h2>
          <p>Enjoy {coupon.percent}% off with this exclusive coupon!</p>
          <div className="card-actions justify-end">
            <button
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white duration-300`}
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_2"
                ) as HTMLDialogElement;
                modal.showModal();
              }}
            >
              Redeem Now
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p className="py-4">Press ESC key or click outside to close</p>
          {/* Input field */}
          <input
            id="couponInput"
            type="text"
            readOnly
            defaultValue={coupon.coupon}
            placeholder="Enter text to copy"
            className="input input-bordered w-full rounded-md mb-4"
          />

          {/* Copy button */}
          <button
            className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white duration-300 w-full`}
            onClick={() => {
              const input = document.getElementById(
                "couponInput"
              ) as HTMLInputElement;
              if (input) {
                input.select();
                document.execCommand("copy");
                toast.success("Coupon copied successfully", { duration: 3000 });
              }
            }}
          >
            Copy
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
export default CouponCard;
