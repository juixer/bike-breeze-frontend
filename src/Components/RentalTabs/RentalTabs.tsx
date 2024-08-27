import { useGetUserRentalsQuery } from "../../redux/features/rentalApi/rentalAPi";
import Loading from "../../utils/Loading";
import NoData from "../../utils/NoData";
import PaidTables from "../RentalTables/PaidTables";
import UnpaidTables from "../RentalTables/UnpaidTables";
import { TRentalInfo } from "../ReturnBikeTable/ReturnBikeTable";

const RentalTabs = () => {
  const { data: rentalData, isLoading } = useGetUserRentalsQuery(undefined);

  console.log(rentalData);
  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl ml-10"
          aria-label="Unpaid"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          {!rentalData || rentalData.data.unpaidResult.length === 0 ? (
            <NoData />
          ) : (
            <div className="border w-full rounded-md">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Start Time</th>
                      <th>Return Time</th>
                      <th>Total Cost</th>
                      <th>Pending Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalData.data.unpaidResult.map(
                      (unpaid: TRentalInfo, index: string) => {
                        return <UnpaidTables key={index} unpaid={unpaid} />;
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl"
          aria-label="Paid"
        />
        <div role="tabpanel" className="tab-content p-10">
          {!rentalData || rentalData.data.paidResult.length === 0 ? (
            <NoData />
          ) : (
            <div className="border w-full rounded-md">
              <PaidTables />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RentalTabs;
