import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { TBikeInfo } from "../AllBikeTable/AllBikeTable";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const BikesTable = ({ available }: { available: TBikeInfo }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-16 w-16 object-contain">
              <PhotoProvider>
                <PhotoView src={available.image}>
                  <img src={available.image} />
                </PhotoView>
              </PhotoProvider>
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
