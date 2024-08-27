import { TBikeInfo } from "../AllBikeTable/AllBikeTable";
import ReturnBikeModel from "../ReturnBikeModel/ReturnBikeModel";
import { TUser } from "../UserManagementTable/UserManagementTable";
import moment from "moment";
export type TRentalInfo = {
  _id: string;
  userId: TUser;
  bikeId: TBikeInfo;
  startTime: string;
  returnTime: string;
  totalCost: number;
  isReturned: boolean;
  advance_payment: boolean;
  payment_status: string;
  transaction_Id?: string;
  advance_transaction_Id?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ReturnBikeTable = ({ rental }: { rental: TRentalInfo }) => {
  const formattedDate = moment(rental.startTime).format('MMMM Do, YYYY, h:mm:ss A')
  return (
    <tr className="hover">
      <td className="min-w-40">{rental.bikeId.name}</td>
      <td className="min-w-40">{rental.bikeId.brand}</td>
      <td className="min-w-40">{rental.bikeId.model}</td>
      <td className="min-w-40">{rental.userId.name}</td>
      <td className="min-w-40">{rental.userId.email}</td>
      <td className="min-w-40">{formattedDate}</td>
      <td>
        <ReturnBikeModel rentalId={rental._id} />
      </td>
    </tr>
  );
};
export default ReturnBikeTable;
