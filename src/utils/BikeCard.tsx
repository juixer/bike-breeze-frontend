import { Link } from "react-router-dom";
import { basicBtnClassName } from "../constants";
import { TBikeInfo } from "../Components/AllBikeTable/AllBikeTable";

const BikeCard = ({ rented }: { rented: TBikeInfo }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl border border-sky-300 rounded-md">
      <figure className="flex justify-center items-center w-full h-full">
        <img src={rented.image} />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">{rented.name}</h2>
        <div className="card-actions">
          <Link to={`/bike/${rented._id}`} className="w-full">
            <button
              className={`${basicBtnClassName} w-full bg-sky-600 text-white hover:bg-sky-700`}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BikeCard;
