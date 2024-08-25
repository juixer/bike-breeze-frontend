import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";

const BikesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Model</th>
            <th>Brand</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-24 w-24 object-contain">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <p className="font-semibold min-w-36">Pulser 150 cc</p>
            </td>
            <td>
              <p className="font-semibold min-w-20">Bajaj</p>
            </td>
            <td>
              <p className="font-semibold min-w-20">100 tk</p>
            </td>
            <th>
              <Link to={'/bike'}>
                <button
                  className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
                >
                  View Details
                </button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BikesTable;
