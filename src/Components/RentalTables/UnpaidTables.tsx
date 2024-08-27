import moment from "moment";
import { basicBtnClassName } from "../../constants";
import { TRentalInfo } from "../ReturnBikeTable/ReturnBikeTable";
import { useUserPaymentMutation } from "../../redux/features/rentalApi/rentalAPi";
import { toast } from "sonner";

const UnpaidTables = ({ unpaid }: { unpaid: TRentalInfo }) => {
  const [userPayment] = useUserPaymentMutation();

  const formattedStartTime = moment(unpaid.startTime).format(
    "MMMM Do, YYYY, h:mm:ss A"
  );
  const formattedReturnTime = moment(unpaid.returnTime).format(
    "MMMM Do, YYYY, h:mm:ss A"
  );

  const handlePayment = async (id: string) => {
    try {
      const paymentResult = await userPayment(id).unwrap();
      console.log(paymentResult);
      toast.loading("Please wait...", { duration: 5000 });
      if (paymentResult.success) {
        window.location.href = paymentResult.data.payment_url;
      } else {
        toast.error("Failed the payment process");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...", { duration: 3000 });
    }
  };

  return (
    <tr className="hover">
      <td className="min-w-40">{unpaid.bikeId.name}</td>
      <td className="min-w-40">{formattedStartTime}</td>
      <td className="min-w-40">{formattedReturnTime}</td>
      <td>{unpaid.totalCost}TK</td>
      <td>
        <button
          onClick={() => handlePayment(unpaid._id)}
          className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full lg:w-2/4`}
        >
          Pay
        </button>
      </td>
    </tr>
  );
};
export default UnpaidTables;
