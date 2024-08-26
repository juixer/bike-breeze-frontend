import { FaMagnifyingGlass, FaUserGroup } from "react-icons/fa6";
import UserManagementTable, {
  TUser,
} from "../../../Components/UserManagentTable/UserManagementTable";
import Headline from "../../../utils/Headline";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import Loading from "../../../utils/Loading";

const UserManagement = () => {
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined);

  return (
    <>
      {isLoading ? (
        <div className="min-h-[95vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="my-5 space-y-5">
          <Headline text="User Management" />
          <h1 className="flex items-center gap-2 font-bold">
            <FaMagnifyingGlass /> Search
          </h1>
          <label className="input input-bordered flex items-center gap-2 rounded-md w-full max-w-xs my-2">
            <input type="text" className="grow" placeholder="Search by email" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <hr />
          <h1 className="flex items-center gap-2 font-bold my-2">
            <FaUserGroup /> Users
          </h1>
          <div className="overflow-x-auto my-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Promote</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.data.map((user: TUser, index: string) => {
                  return <UserManagementTable key={index} user={user} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default UserManagement;
