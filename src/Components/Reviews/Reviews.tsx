import Marquee from "react-fast-marquee";
import ReviewCard from "../../utils/ReviewCard";
import Headline from "../../utils/Headline";
import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { useGetLatestReviewsQuery } from "../../redux/features/review/review.api";
import Loading from "../../utils/Loading";
import NoData from "../../utils/NoData";
import { TReviewInfo } from "../ReviewTables/VerifiedReviewTable";
const Reviews = () => {
  const { data: latestReview, isLoading } = useGetLatestReviewsQuery(
    undefined,
    {
      pollingInterval: 15000,
    }
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-16">
        <Loading />
      </div>
    );
  }

  if (!latestReview || latestReview.data.length === 0) {
    return <NoData />;
  }
  return (
    <div className="space-y-5">
      <Headline text="reviews" />
      <div>
        <Marquee className="pb-8">
          {latestReview.data.map((review: TReviewInfo, index: string) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </Marquee>
        <div className="flex justify-center items-center">
          <Link to="/write-review">
            <button
              className={`${basicBtnClassName} bg-sky-600 text-white hover:bg-sky-700 duration-300 `}
            >
              Write a review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
