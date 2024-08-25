import Marquee from "react-fast-marquee";
import ReviewCard from "../../utils/ReviewCard";
import Headline from "../../utils/Headline";
const Reviews = () => {
  return (
    <div className="space-y-5">
        <Headline text="reviews"/>
      <Marquee className="" pauseOnHover={true}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Marquee>
    </div>
  );
};
export default Reviews;
