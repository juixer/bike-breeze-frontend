import Lottie from "lottie-react";
import paymentSuccessAni from "../assets/paymentSuccess.json"
import HelmetElement from "../utils/HelmetElement";
const PaymentSuccess = () => {

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <HelmetElement text="Payment success"/>
       <div className="max-w-72 mx-auto">
          <Lottie animationData={paymentSuccessAni} loop={true} />
        </div>
        <div className="flex justify-center flex-col items-center gap-5">
          <h1 className="text-5xl font-semibold">Payment Successful</h1>
          <h1 className="text-3xl font-medium">Thank you for choosing us</h1>
        </div>
    </div>
  );
};
export default PaymentSuccess;
