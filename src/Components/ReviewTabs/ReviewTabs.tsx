import {
  useNotVerifiedReviewsQuery,
  useVerifiedReviewsQuery,
} from "../../redux/features/review/review.api";
import Loading from "../../utils/Loading";
import NoData from "../../utils/NoData";
import NonVerifiedReviewTable from "../ReviewTables/NonVerifiedReviewTable";
import VerifiedReviewTable, {
  TReviewInfo,
} from "../ReviewTables/VerifiedReviewTable";

const ReviewTabs = () => {
  const { data: verifiedReviews, isLoading } = useVerifiedReviewsQuery(
    undefined,
    { pollingInterval: 15000 }
  );
  const { data: nonVerifiedReviews, isLoading: isLoading2 } =
    useNotVerifiedReviewsQuery(undefined, { pollingInterval: 15000 });

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (isLoading2) {
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
          aria-label="Non-Verified"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          {!nonVerifiedReviews || nonVerifiedReviews.data.length === 0 ? (
            <NoData />
          ) : (
            <div className="border w-full rounded-md">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Bike</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonVerifiedReviews.data.map(
                      (nonVerified: TReviewInfo, index: string) => {
                        return (
                          <NonVerifiedReviewTable
                            key={index}
                            nonVerified={nonVerified}
                          />
                        );
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
          aria-label="Verified"
        />
        <div role="tabpanel" className="tab-content p-10">
          {!verifiedReviews || verifiedReviews.data.length === 0 ? (
            <NoData />
          ) : (
            <div className="border w-full rounded-md">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Bike</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {verifiedReviews.data.map(
                      (verified: TReviewInfo, index: string) => {
                        return (
                          <VerifiedReviewTable
                            key={index}
                            verified={verified}
                          />
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ReviewTabs;
