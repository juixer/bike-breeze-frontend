import { basicBtnClassName } from "../constants";

const BikeCard = () => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl border border-sky-300 rounded-md">
      <figure>
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/1/EW/OK/QD/3511041/bajaj-pulsar-150cc-motorcycle.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">Pulser Bike 150cc</h2>
        <div className="card-actions">
          <button
            className={`${basicBtnClassName} w-full bg-sky-600 text-white hover:bg-sky-700`}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};
export default BikeCard;
