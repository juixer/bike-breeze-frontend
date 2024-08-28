import { Link, useLocation } from "react-router-dom";
import FramerContainer from "../Components/layouts/FramerContainer";
import HelmetElement from "../utils/HelmetElement";
import Headline from "../utils/Headline";
import { useSearchTermBikeQuery } from "../redux/features/bike/bikesApi";
import Loading from "../utils/Loading";
import { TBikeInfo } from "../Components/AllBikeTable/AllBikeTable";
import BikesTable from "../Components/BikesTable/BikesTable";
import { basicBtnClassName } from "../constants";

const SearchTermBike = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm;
  const { data: searchTermBike, isLoading } =
    useSearchTermBikeQuery(searchTerm);

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <FramerContainer>
      <div className="my-5">
        <HelmetElement text={`${searchTerm} Bikes`} />
        <Headline text="Searched Bikes" />
        
        <hr className="my-2" />
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
              {searchTermBike.data.map(
                (available: TBikeInfo, index: string) => {
                  return <BikesTable key={index} available={available} />;
                }
              )}
            </tbody>
          </table>
        </div>
        <div className="my-5 flex justify-center items-center">
          <Link to={'/available-bikes'}>
            <button className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 text-white duration-300`}>See All Available bikes</button>
          </Link>
        </div>
      </div>
    </FramerContainer>
  );
};
export default SearchTermBike;
