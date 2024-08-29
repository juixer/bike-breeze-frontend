import moment from 'moment-timezone';
import { TRentalInfo } from "../ReturnBikeTable/ReturnBikeTable";

const PaidTables = ({ paid }: { paid: TRentalInfo }) => {
  const formattedStartTime = moment(paid.startTime)
  .tz('Asia/Dhaka')
  .format('MMMM Do, YYYY, h:mm:ss A');

const formattedReturnTime = moment(paid.returnTime)
  .tz('Asia/Dhaka')
  .format('MMMM Do, YYYY, h:mm:ss A');

  return (
    <tr className="hover">
      <td className="min-w-40">{paid.bikeId.name}</td>
      <td className="min-w-40">{formattedStartTime}</td>
      <td className="min-w-40">{formattedReturnTime}</td>
      <td>{paid.totalCost}TK</td>
      <td></td>
    </tr>
  );
};
export default PaidTables;
