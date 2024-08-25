import { FaCircleInfo } from "react-icons/fa6";
import BookModal from "../Components/BookModal/BookModal";

const BikeDetails = () => {
  return (
    <div className="space-y-5 my-5 ">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/1/EW/OK/QD/3511041/bajaj-pulsar-150cc-motorcycle.png"
          className="w-96 h-96 object-contain lg:w-[450px] lg:h-[450px]"
        />
        <div className="space-y-2">
          <div>
            <h1 className="text-2xl font-bold">Price Per Hour</h1>
            <p className="text-xl">600 BDT</p>
          </div>
          <BookModal />
        </div>
      </div>

      <div>
        <h1 className="flex items-center gap-2 font-bold mb-2">
          <FaCircleInfo /> Details
        </h1>
        <hr />
        <div className="mt-2 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-2xl font-bold">Name</h1>
            <p className="text-xl">Pulser 150cc</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Brand</h1>
            <p className="text-xl">Bajaj</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Model</h1>
            <p className="text-xl">Pulser</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">CC</h1>
            <p className="text-xl">150cc</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Year</h1>
            <p className="text-xl">2015</p>
          </div>
          <hr className="col-span-1 md:col-span-2 lg:col-span-4" />

          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <h1 className="text-2xl font-bold">Description</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quis voluptates alias voluptatem eos unde qui explicabo in at
              consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BikeDetails;
