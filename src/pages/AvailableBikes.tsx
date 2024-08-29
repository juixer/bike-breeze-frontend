import { FaFilter, FaMotorcycle } from "react-icons/fa6";
import BikesTable from "../Components/BikesTable/BikesTable";
import Headline from "../utils/Headline";
import {
  useGetAvailableBikeQuery,
  useGetBikeBrandQuery,
} from "../redux/features/bike/bikesApi";
import Loading from "../utils/Loading";
import NoData from "../utils/NoData";
import { TBikeInfo } from "../Components/AllBikeTable/AllBikeTable";
import { useState } from "react";
import { TBrand } from "./dashboardPages/admin/AllBikes";
import HelmetElement from "../utils/HelmetElement";
import FramerContainer from "../Components/layouts/FramerContainer";

const AvailableBikes = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  const query = {
    name,
    brand,
  };
  const { data: availableBikes, isLoading } = useGetAvailableBikeQuery(query, {
    pollingInterval: 15000,
  });

  const { data: brands,isLoading :BrandLoading } = useGetBikeBrandQuery(undefined);

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (BrandLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <FramerContainer>
      <div className="my-5">
        <HelmetElement text="Available Bikes" />
        <Headline text="Available Bikes" />
        <h1 className="flex items-center gap-2 font-bold">
          <FaFilter /> Filter
        </h1>
        <div className="flex gap-5 flex-col md:flex-row  my-2">
          <label className="input input-bordered flex items-center gap-2 rounded-md w-full max-w-xs">
            <input
              type="text"
              className="grow"
              onChange={handleSearch}
              placeholder="Search by name"
            />
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

          <select
            onChange={handleBrand}
            className="select select-bordered w-full max-w-xs rounded-md"
          >
            <option value={""}>All</option>;
            {brands.data.map((brand: TBrand, i: string) => {
              return (
                <option value={brand.brand} key={i}>
                  {brand.brand}
                </option>
              );
            })}
          </select>
        </div>
        <hr />
        <h1 className="my-2 flex items-center gap-2 font-bold">
          <FaMotorcycle /> Available Bikes
        </h1>
        {!availableBikes || availableBikes.data.length === 0 ? (
          <NoData />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {availableBikes.data.map(
                  (available: TBikeInfo, index: string) => {
                    return <BikesTable key={index} available={available} />;
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </FramerContainer>
  );
};
export default AvailableBikes;
