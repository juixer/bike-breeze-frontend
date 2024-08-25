import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";

const AllBikeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price Per Hour</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          <tr className="hover">
            <th>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-16 w-16 object-contain">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </th>
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Bajaj</td>
            <td className="min-w-40">Pulser</td>
            <td>1000TK</td>
            <td>
              <Link to={'/dashboard/update-bike'}>
                <button
                  className={`${basicBtnClassName} bg-emerald-500 duration-300 text-black hover:bg-emerald-600`}
                >
                  Update
                </button>
              </Link>
            </td>
            <td>
              <button
                className={`${basicBtnClassName} bg-red-500 duration-300 text-white hover:bg-red-900`}
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
export default AllBikeTable;
