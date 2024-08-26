import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { TBikeInfo } from "../AllBikeTable/AllBikeTable";

const BikesTable = ({available} : {available : TBikeInfo}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-16 w-16 object-contain">
              <img
                src={available.image}
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="font-semibold min-w-36">{available.name}</p>
      </td>
      <td>
        <p className="font-semibold min-w-20">{available.brand}</p>
      </td>
      <td>
        <p className="font-semibold min-w-20">{available.model}</p>
      </td>
      <td>
        <p className="font-semibold min-w-20">{available.pricePerHour}tk</p>
      </td>
      <th>
        <Link to={`/bike/${available._id}`}>
          <button
            className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white`}
          >
            View Details
          </button>
        </Link>
      </th>
    </tr>
  );
};
export default BikesTable;
