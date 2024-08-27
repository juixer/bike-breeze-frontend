import { FaX } from "react-icons/fa6";
import { basicBtnClassName } from "../../constants";
import React from "react";
import { toast } from "sonner";
import { useCreateRentalMutation } from "../../redux/features/rentalApi/rentalAPi";

const BookModal = ({ bikeID }: { bikeID: string }) => {
  const [createRental] = useCreateRentalMutation();

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
          bikeId: bikeID,
          startTime: formattedDateTime,
        };

        toast.loading("Please wait...",{duration:5000})
        const rentalResult = await createRental(rentalInfo).unwrap();
        
        if(rentalResult.success){
          window.location.href = rentalResult.data.payment_url
        }else{
          toast.error("Failed to book a rental")
        }
      } else {
        toast.warning("Date and time must be selected.", { duration: 3000 });
      }
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong...", { duration: 3000});
    }
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_5"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        Book Now
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
            <h1 className="font-bold">Please select your rental date and time</h1>
          </div>
          <div >
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
                <p className="font-semibold">
                 <span>Note: </span>
                  <span className="text-red-600">
                   You have to pay advanced 100TK first
                  </span>
                </p>
              </div>

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
export default BookModal;
