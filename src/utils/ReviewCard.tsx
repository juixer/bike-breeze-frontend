import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ReviewCard = () => {
  return (
    <div className="mx-2 border-2 rounded-md p-2 shadow-xl h-60 flex flex-col">
      <div className="flex gap-5 items-center flex-grow">
        <div className="flex items-center flex-col gap-2">
          <img
            src="https://i.ibb.co/CmmRr9W/shanto-as-an-anime-character.jpg"
            className="rounded-full w-32 h-32"
            alt="Reviewer's Avatar"
          />
        </div>
        <div className="flex-grow">
          <div>
            <Rating
              className="rounded-md"
              style={{ maxWidth: 100 }}
              readOnly
              value={3}
            />
          </div>
          <h1 className="font-semibold">Ashfakul Islam</h1>
          <p className="max-w-72 overflow-hidden font-extralight text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            est, eaque delectus, saepe doloribus atque blanditiis molestias
            ipsum incidunt porro magnam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
