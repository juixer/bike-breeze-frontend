import moment from "moment";
import { basicBtnClassName } from "../../constants";
import { TRentalInfo } from "../ReturnBikeTable/ReturnBikeTable";

const UnpaidTables = ({ unpaid }: { unpaid: TRentalInfo }) => {
  const formattedStartTime = moment(unpaid.startTime).format('MMMM Do, YYYY, h:mm:ss A')
  const formattedReturnTime = moment(unpaid.returnTime).format('MMMM Do, YYYY, h:mm:ss A')
  return (
    <tr className="hover">
      <td className="min-w-40">{unpaid.bikeId.name}</td>
      <td className="min-w-40">{formattedStartTime}</td>
      <td className="min-w-40">{formattedReturnTime}</td>
      <td>{unpaid.totalCost}TK</td>
      <td>
        <button
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full lg:w-2/4`}
        >
          Pay
        </button>
      </td>
    </tr>
  );
};
export default UnpaidTables;
