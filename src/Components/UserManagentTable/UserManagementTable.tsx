import { basicBtnClassName } from "../../constants";

const UserManagementTable = () => {
  return (
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
          {/* row 2 */}
          <tr className="hover">
            <td className="min-w-40">Ashfakul Islam</td>
            <td className="min-w-40">example@example.com</td>
            <td>
              <button
                className={`${basicBtnClassName} bg-sky-500 duration-300 text-white hover:bg-sky-600`}
              >
                Promote
              </button>
            </td>
            <td>
              <button
                className={`${basicBtnClassName} bg-red-600 duration-300 text-white hover:bg-red-900`}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default UserManagementTable;
