import { baseApi } from "../../api/baseApi";
import { store } from "../../store";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create coupon
    createCoupon: builder.mutation({
      query: (couponInfo) => {
        const token = store.getState().auth.token;
        return {
          url: "/coupons",
          method: "POST",
          body: couponInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["coupon"],
    }),
    // get all coupons
    getAllCoupons: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/coupons",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["coupon"],
    }),
    // disable coupon
    disableCoupon: builder.mutation({
      query: (id) => {
        const token = store.getState().auth.token;
        return {
          url: `/coupons/disable/${id}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["coupon"],
    }),
    // active coupon
    activeCoupon: builder.mutation({
      query: (id) => {
        const token = store.getState().auth.token;
        return {
          url: `/coupons/active/${id}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["coupon"],
    }),
    // delete coupon
    deleteCoupon: builder.mutation({
      query: (id) => {
        const token = store.getState().auth.token;
        return {
          url: `/coupons/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["coupon"],
    }),
    // available coupon
    availableCoupons: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/coupons/available",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["coupon"],
    }),
  }),
});

export const {
  useCreateCouponMutation,
  useGetAllCouponsQuery,
  useDisableCouponMutation,
  useActiveCouponMutation,
  useDeleteCouponMutation,
  useAvailableCouponsQuery,
} = couponApi;
