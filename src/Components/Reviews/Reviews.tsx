import Marquee from "react-fast-marquee";
import ReviewCard from "../../utils/ReviewCard";
import Headline from "../../utils/Headline";
import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
const Reviews = () => {
  return (
    <div className="space-y-5">
      <Headline text="reviews" />
      <Marquee>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
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
  );
};
export default Reviews;
