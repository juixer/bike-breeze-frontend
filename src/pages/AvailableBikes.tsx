import { FaFilter, FaMotorcycle } from "react-icons/fa6";
import BikesTable from "../Components/BikesTable/BikesTable";

const AvailableBikes = () => {
  return (
    <div className="my-5">
      <h1 className="flex items-center gap-2 font-bold">
        <FaFilter /> Filter
      </h1>
      <div className="flex gap-5 flex-col md:flex-row  my-2">
        <div className="w-full lg:w-1/4 flex flex-row items-center gap-2">
          <input type="checkbox" id="available" className="checkbox rounded" />
          <label className="checkbox-label" htmlFor="available">
            Available Bikes
          </label>
        </div>

        <select className="select select-bordered w-full max-w-xs rounded-md">
          <option disabled selected>
            select bike brand
          </option>
          <option>Bajaj</option>
          <option>Yamaha</option>
        </select>
      </div>
      <hr />
      <h1 className="my-2 flex items-center gap-2 font-bold">
        <FaMotorcycle /> All Bikes
      </h1>
      <BikesTable />
    </div>
  );
};
export default AvailableBikes;
