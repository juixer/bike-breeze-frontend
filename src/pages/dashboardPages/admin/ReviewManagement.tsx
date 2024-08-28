import ReviewTabs from "../../../Components/ReviewTabs/ReviewTabs";
import Headline from "../../../utils/Headline";

const ReviewManagement = () => {
  return (
    <div className="my-5 space-y-5">
      <Headline text="Review Management" />
      <ReviewTabs />
    </div>
  );
};
export default ReviewManagement;
