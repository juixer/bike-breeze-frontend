import { FaX } from "react-icons/fa6";
import { basicBtnClassName } from "../../constants";
import React from "react";

const BookModal = () => {
  const handleBook = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const dateValue = form.date.value;
    const timeValue = form.time.value;

    if (dateValue && timeValue) {
      const formattedDateTime = new Date(
        `${dateValue}T${timeValue}:00Z`
      ).toISOString();
      console.log(formattedDateTime);
    } else {
      console.log("Date and time must be selected.");
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
          <div className="flex justify-end mb-2">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="rounded-full bg-red-600 p-1 text-white">
                <FaX />
              </button>
            </form>
          </div>
          <div>
            <form onSubmit={handleBook} className="space-y-2">
                <h1>Date</h1>
              <input
                type="date"
                name="date"
                className="input input-bordered rounded-md w-full"
              />
               <h1>Time</h1>
              <input
                type="time"
                name="time"
                className="input input-bordered rounded-md w-full"
              />
              <div>
                <p>Note:<span className="text-red-600 font-semibold">You have to pay advanced 100TK first</span></p>
              </div>

              <div className="flex justify-end">
                <button
                  className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
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
