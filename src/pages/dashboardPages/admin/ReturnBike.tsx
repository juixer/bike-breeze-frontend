import ReturnBikeTable, {
  TRentalInfo,
} from "../../../Components/ReturnBikeTable/ReturnBikeTable";
import { useGetAllRentalsQuery } from "../../../redux/features/rentalApi/rentalAPi";
import Headline from "../../../utils/Headline";
import Loading from "../../../utils/Loading";
import NoData from "../../../utils/NoData";

const ReturnBike = () => {
  const { data: rentalBikes, isLoading } = useGetAllRentalsQuery(undefined, {
    pollingInterval: 15000,
  });

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="my-5 space-y-5">
      <Headline text="Return Bikes" />
      {!rentalBikes || rentalBikes.data.length === 0 ? (
        <NoData />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Start Time</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              {rentalBikes.data.map((rental: TRentalInfo, index: string) => {
                return <ReturnBikeTable key={index} rental={rental} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ReturnBike;
