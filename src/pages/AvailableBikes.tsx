import { FaFilter, FaMotorcycle } from "react-icons/fa6";
import BikesTable from "../Components/BikesTable/BikesTable";
import Headline from "../utils/Headline";

const AvailableBikes = () => {
  return (
    <div className="my-5">
      <Headline text="Available Bikes" />
      <h1 className="flex items-center gap-2 font-bold">
        <FaFilter /> Filter
      </h1>
      <div className="flex gap-5 flex-col md:flex-row  my-2">
        <label className="input input-bordered flex items-center gap-2 rounded-md w-full max-w-xs">
          <input type="text" className="grow" placeholder="Search by name" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <select className="select select-bordered w-full max-w-xs rounded-md">
          <option disabled selected>
            select bike brand
          </option>
          <option>Bajaj</option>
          <option>Yamaha</option>
        </select>

        <div className="w-full lg:w-1/4 flex flex-row items-center gap-2">
          <input type="checkbox" id="available" className="checkbox rounded" />
          <label className="checkbox-label" htmlFor="available">
            Available Bikes
          </label>
        </div>
      </div>
      <hr />
      <h1 className="my-2 flex items-center gap-2 font-bold">
        <FaMotorcycle /> Available Bikes
      </h1>
      <BikesTable />
    </div>
  );
};
export default AvailableBikes;
