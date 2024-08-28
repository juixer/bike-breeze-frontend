import { FaFilter, FaMotorcycle } from "react-icons/fa6";
import Headline from "../../../utils/Headline";
import AllBikeTable, {
  TBikeInfo,
} from "../../../Components/AllBikeTable/AllBikeTable";
import {
  useGetAllBikesQuery,
  useGetBikeBrandQuery,
} from "../../../redux/features/admin/bikesApi";
import Loading from "../../../utils/Loading";
import NoData from "../../../utils/NoData";
import { useState } from "react";
import HelmetElement from "../../../utils/HelmetElement";

export type TBrand = {
  _id: number;
  brand: string;
  name: string;
};

const AllBikes = () => {
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

  const { data: bikes, isLoading } = useGetAllBikesQuery(query, {
    pollingInterval: 15000,
    skipPollingIfUnfocused: true,
  });

  const { data: brands } = useGetBikeBrandQuery(undefined);

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="my-5 space-y-5">
      <HelmetElement text="All bikes"/>
        <Headline text="All Bikes" />
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
          <FaMotorcycle /> All Bikes
        </h1>
        {!bikes || bikes.data.length === 0 ? (
          <NoData />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Price Per Hour</th>
                  <th>Total Rented</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bikes.data.map((bike: TBikeInfo, index: string) => {
                  return <AllBikeTable key={index} bike={bike} />;
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
export default AllBikes;
