import { FaCircleCheck, FaX } from "react-icons/fa6";
import { basicBtnClassName } from "../../constants";
import { toast } from "sonner";
import { useReturnRentalMutation } from "../../redux/features/rentalApi/rentalAPi";

const ReturnBikeModel = ({ rentalId }: { rentalId: string }) => {
  const [returnRental] = useReturnRentalMutation();

  const handleBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const dateValue = form.date.value;
      const timeValue = form.time.value;

      if (dateValue && timeValue) {
        const formattedDateTime = new Date(
          `${dateValue}T${timeValue}:00Z`
        ).toISOString();

        const rentalInfo = {
          rentalId: rentalId,
          returnTime: formattedDateTime,
        };
        const rentalResult = await returnRental(rentalInfo).unwrap();
        toast.success(rentalResult.message, { duration: 300 });
        simulateEscKeyPress();
      } else {
        toast.warning("Date and time must be selected.", { duration: 3000 });
      }
    } catch (error) {
      console.log(error);
      toast.warning(
        "You can't select time before Start Time check data and time again",
        { duration: 3000 }
      );
    }
  };
  const simulateEscKeyPress = () => {
    const escEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      keyCode: 27,
      code: "Escape",
      which: 27,
      bubbles: true,
      cancelable: true,
    });

    document.dispatchEvent(escEvent);
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white flex  items-center gap-2`}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_5"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        <FaCircleCheck /> Return
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border">
          <div className="flex justify-end">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="rounded-full bg-red-600 p-1 text-white">
                <FaX />
              </button>
            </form>
          </div>
          <div className="my-3">
            <h1 className="font-bold">
              Please select bike return date and time
            </h1>
          </div>
          <div>
            <form onSubmit={handleBook} className="space-y-4">
              <h1 className="font-semibold">Date</h1>
              <input
                type="date"
                name="date"
                className="input input-bordered rounded-md w-full"
              />
              <h1 className="font-semibold">Time</h1>
              <input
                type="time"
                name="time"
                className="input input-bordered rounded-md w-full"
              />

              <div>
                <button
                  className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 w-full text-white`}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default ReturnBikeModel;
