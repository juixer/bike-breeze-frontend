import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { TReviewInfo } from "../Components/ReviewTables/VerifiedReviewTable";
const ReviewCard = ({ review }: { review: TReviewInfo }) => {
  return (
    <div className="mx-2 border  border-sky-300 rounded-md shadow-xl h-60 flex flex-col">
      <div className="flex gap-5 items-center flex-grow">
        <img src={review.image} className=" w-40 rounded-l-md h-full object-cover" />
        <div className="flex-grow h-full p-2">
          <h1 className="font-semibold text-sm">{review.name}</h1>
          <h1 className="text-xs">Bike:{review.bikeName}</h1>
          <div>
            <Rating
              className="rounded-md"
              style={{ maxWidth: 80 }}
              readOnly
              value={review.rating}
            />
          </div>
          <p className="max-w-60 max-h-44 overflow-hidden">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
