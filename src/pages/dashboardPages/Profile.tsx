import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { useGetUserProfileQuery } from "../../redux/features/user/userApi";
import Loading from "../../utils/Loading";
import HelmetElement from "../../utils/HelmetElement";

const Profile = () => {
  const { data: userInfo, isLoading } = useGetUserProfileQuery(undefined);
  return (
    <>
      {isLoading ? (
        <div className="min-h-[95vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="space-y-5 my-5">
          <HelmetElement text="Profile"/>
          <h1 className="text-center text-2xl lg:text-4xl font-semibold uppercase ">
            Welcome To Dashboard {userInfo.data.name}
          </h1>

          <div className="max-w-2xl mx-auto space-y-5">
            <div className="flex flex-col justify-center items-center space-y-5">
              <img
                src={userInfo.data.profile_picture}
                className="w-56 h-56 object-contain rounded-full"
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">
              <div className="space-y-5">
                <div>
                  <h1 className="text-2xl font-bold">Name</h1>
                  <p className="text-xl">{userInfo.data.name}</p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Email</h1>
                  <p className="text-xl">{userInfo.data.email}</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h1 className="text-2xl font-bold">Phone</h1>
                  <p className="text-xl">{userInfo.data.phone}</p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Address</h1>
                  <p className="text-xl">{userInfo.data.address}</p>
                </div>
              </div>
            </div>
            <div>
              <Link to={"/dashboard/edit-profile"}>
                <button
                  className={`${basicBtnClassName} w-full bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
