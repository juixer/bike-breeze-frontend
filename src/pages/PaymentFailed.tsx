import Lottie from "lottie-react";
import paymentErrAni from "../assets/paymentFailed.json";
import HelmetElement from "../utils/HelmetElement";
import FramerContainer from "../Components/layouts/FramerContainer";
const PaymentFailed = () => {
  return (
    <FramerContainer><div className="flex flex-col gap-5 justify-center items-center">
    <HelmetElement text="Payment failed"/>
    <div className="max-w-72 mx-auto">
      <Lottie animationData={paymentErrAni} loop={true} />
    </div>
    <div className="flex justify-center flex-col items-center gap-5">
      <h1 className="text-5xl font-semibold">Payment Failed</h1>
      <h1 className="text-3xl font-medium">
        Something went wrong
      </h1>
    </div>
  </div></FramerContainer>
  );
};
export default PaymentFailed;
