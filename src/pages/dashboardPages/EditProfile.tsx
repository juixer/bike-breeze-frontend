import { basicBtnClassName } from "../../constants";
import Headline from "../../utils/Headline";

const EditProfile = () => {
    return(
        <div className="space-y-5 my-5">
      <Headline text="edit profile" />
      <form className="flex flex-col justify-center items-center w-full space-y-5">
        <input
          type="text"
          placeholder="Enter your name here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter your email here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter your phone no. here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter your address here"
          className="input input-bordered  w-full lg:w-2/4 rounded-md"
        />
        <input
          type="file"
          className="file-input file-input-bordered file-input-info  w-full lg:w-2/4 rounded-md bgsky6"
        />

        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
        >
          Update Profile
        </button>

      </form>
    </div>
    )}
export default EditProfile;