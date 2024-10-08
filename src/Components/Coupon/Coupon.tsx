import { useAvailableCouponsQuery } from "../../redux/features/coupon/couponApi";
import CouponCard from "../../utils/CouponCard";
import Headline from "../../utils/Headline";
import Loading from "../../utils/Loading";
import { TCoupon } from "../CouponTables/CouponTables";

const Coupon = () => {
  const { data: availableCoupon, isLoading } = useAvailableCouponsQuery(
    undefined,
    { pollingInterval: 15000 }
  );

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="my-5 space-y-5">
      <Headline text="Coupons & Discounts" />

      <div className="w-full">
        {!availableCoupon || availableCoupon.data.length === 0 ? (
          <div className="min-h-[30vh] flex justify-center items-center flex-col gap-2 py-4">
            <img
              src="https://i.ibb.co/0Dn7L6k/nocoupon-removebg-preview.png"
              className="w-48"
            />
            <h1 className="text-3xl font-bold uppercase">Sorry</h1>
            <h1 className="text-xl font-bold uppercase">
              there are no coupons available right now
            </h1>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-5">
              {availableCoupon.data.map((coupon: TCoupon, index: string) => (
                <CouponCard key={index} coupon={coupon} />
              ))}
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-md max-w-4xl mx-auto">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How to apply this
              </div>
              <div className="collapse-content">
                <p>
                  To apply this coupon, visit the 'My Rental' page in your
                  dashboard, click on 'Pay,' and you'll be able to enter your
                  coupon there.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Coupon;
