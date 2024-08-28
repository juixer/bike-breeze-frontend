import ReviewTabs from "../../../Components/ReviewTabs/ReviewTabs";
import Headline from "../../../utils/Headline";
import HelmetElement from "../../../utils/HelmetElement";

const ReviewManagement = () => {
  return (
    <div className="my-5 space-y-5">
      <HelmetElement text="Review Management"/>
      <Headline text="Review Management" />
      <ReviewTabs />
    </div>
  );
};
export default ReviewManagement;
