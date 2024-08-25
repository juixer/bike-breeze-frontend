import { basicBtnClassName } from "../../../constants";
import Headline from "../../../utils/Headline";

const AddBike = () => {
  return (
    <div className="space-y-5 my-5">
      <Headline text="Add Bike" />
      <form className="flex flex-col justify-center items-center w-full space-y-5">
        <input
          type="text"
          placeholder="Enter bike name here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike brand here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter bike model here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="number"
          placeholder="Enter bike price here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="number"
          placeholder="Enter bike cc here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="number"
          placeholder="Enter bike release year here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <textarea
          className="textarea textarea-bordered w-full lg:w-2/4 rounded-md h-32"
          placeholder="Enter bike description"
        ></textarea>
        <input
          type="file"
          className="file-input file-input-bordered file-input-info  w-full lg:w-2/4 rounded-md bgsky6"
        />

        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
        >
          Add Bike
        </button>
      </form>
    </div>
  );
};
export default AddBike;
