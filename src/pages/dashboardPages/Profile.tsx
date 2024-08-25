import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";

const Profile = () => {
  const name = "Ashfakul Islam";
  return (
    <div className="space-y-5 my-5">
      <h1 className="text-center text-2xl lg:text-4xl font-semibold uppercase ">
        Welcome To Dashboard {name}
      </h1>

      <div className="max-w-2xl mx-auto space-y-5">
        <div className="flex flex-col justify-center items-center space-y-5">
          <img
            src="https://i.ibb.co/jDMGShY/rainy-1.png"
            className="w-56 h-56 object-contain rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-bold">Name</h1>
              <p className="text-xl">{name}</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Email</h1>
              <p className="text-xl">example@example.com</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-bold">Phone</h1>
              <p className="text-xl">01791990095</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Address</h1>
              <p className="text-xl">Magura, Bangladesh</p>
            </div>
          </div>
        </div>
        <div>
          <Link to={'/dashboard/edit-profile'}>
            <button
              className={`${basicBtnClassName} w-full bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
            >
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
