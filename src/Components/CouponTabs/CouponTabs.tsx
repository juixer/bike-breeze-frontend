import { FieldValues, useForm } from "react-hook-form";
import { basicBtnClassName } from "../../constants";
import {
  useCreateCouponMutation,
  useGetAllCouponsQuery,
} from "../../redux/features/coupon/couponApi";
import { toast } from "sonner";
import Loading from "../../utils/Loading";
import NoData from "../../utils/NoData";
import CouponTables, { TCoupon } from "../CouponTables/CouponTables";

const CouponTabs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createCoupon] = useCreateCouponMutation();
  const { data: coupons, isLoading } = useGetAllCouponsQuery(undefined, {
    pollingInterval: 15000,
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const couponInfo = {
        name: data.name,
        coupon: data.coupon,
        percent: parseInt(data.percent),
      };

      const couponResult = await createCoupon(couponInfo).unwrap();
      reset()
      toast.success(couponResult.message, { duration: 3000, id: toastId });
    } catch (error) {
      console.log(error);
      toast.warning("This code already exist", { duration: 3000, id: toastId });
    }
  };
  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl ml-10"
          aria-label="Create Coupon"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full space-y-5"
          >
            <div className="w-full lg:w-2/4 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter coupon name here"
                {...register("name", { required: true })}
                className="input input-bordered  w-full  rounded-md"
              />
              {errors.name && (
                <span className="text-red-500">This Field is required</span>
              )}
            </div>
            <div className="w-full lg:w-2/4 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter coupon code here"
                {...register("coupon", { required: true })}
                className="input input-bordered  w-full  rounded-md"
              />
              {errors.coupon && (
                <span className="text-red-500">This Field is required</span>
              )}
            </div>
            <div className="w-full lg:w-2/4 flex flex-col gap-2">
              <input
                type="number"
                placeholder="Enter percentage here"
                {...register("percent", { required: true })}
                className="input input-bordered  w-full  rounded-md"
              />
              {errors.percent && (
                <span className="text-red-500">This Field is required</span>
              )}
            </div>
            <button
              className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white  w-full lg:w-2/4`}
            >
              Submit
            </button>
          </form>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl"
          aria-label="Coupons"
        />
        <div role="tabpanel" className="tab-content p-10">
          {!coupons || coupons.data.length === 0 ? (
            <NoData />
          ) : (
            <div className="border w-full rounded-md">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Coupon</th>
                      <th>Percentage</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons.data.map((coupon: TCoupon, index: string) => {
                      return <CouponTables key={index} coupon={coupon} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CouponTabs;
