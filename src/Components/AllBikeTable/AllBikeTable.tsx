import { Link } from "react-router-dom";
import { basicBtnClassName } from "../../constants";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export type TBikeInfo = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const AllBikeTable = ({ bike }: { bike: TBikeInfo }) => {
  return (
    <>
      <tr className="hover">
        <th>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-16 w-16 object-contain">
                <PhotoProvider>
                  <PhotoView src={bike.image}>
                    <img src={bike.image} />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </th>
        <td className="min-w-40">{bike.name}</td>
        <td className="min-w-40">{bike.brand}</td>
        <td className="min-w-40">{bike.model}</td>
        <td>{bike.pricePerHour}TK</td>
        <td>
          <Link to={`/dashboard/update-bike/${bike._id}`}>
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
    </>
  );
};
export default AllBikeTable;
