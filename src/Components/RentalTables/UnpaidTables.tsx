import moment from "moment";
import { TRentalInfo } from "../ReturnBikeTable/ReturnBikeTable";
import ApplyCouponModal from "../ApplyCouponModal/ApplyCouponModal";

const UnpaidTables = ({ unpaid }: { unpaid: TRentalInfo }) => {
  const formattedStartTime = moment(unpaid.startTime).format(
    "MMMM Do, YYYY, h:mm:ss A"
  );
  const formattedReturnTime = moment(unpaid.returnTime).format(
    "MMMM Do, YYYY, h:mm:ss A"
  );

  return (
    <>
      <tr className="hover">
        <td className="min-w-40">{unpaid.bikeId.name}</td>
        <td className="min-w-40">{formattedStartTime}</td>
        <td className="min-w-40">{formattedReturnTime}</td>
        <td>{unpaid.totalCost}TK</td>
        <td>
          <ApplyCouponModal id={unpaid._id} />
        </td>
      </tr>
    </>
  );
};
export default UnpaidTables;
