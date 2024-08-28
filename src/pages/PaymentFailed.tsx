import Lottie from "lottie-react";
import paymentErrAni from "../assets/paymentFailed.json";
const PaymentFailed = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="max-w-72 mx-auto">
        <Lottie animationData={paymentErrAni} loop={true} />
      </div>
      <div className="flex justify-center flex-col items-center gap-5">
        <h1 className="text-5xl font-semibold">Payment Failed</h1>
        <h1 className="text-3xl font-medium">
          Something went wrong
        </h1>
      </div>
    </div>
  );
};
export default PaymentFailed;
