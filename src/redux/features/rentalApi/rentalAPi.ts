import { baseApi } from "../../api/baseApi";
import { store } from "../../store";

const rentalAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create rental
    createRental: builder.mutation({
      query: (rentalInfo) => {
        const token = store.getState().auth.token;
        return {
          url: "/rentals",
          method: "POST",
          body: rentalInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["rental"],
    }),
    // get all rentals
    getAllRentals: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/rentals/all-rentals",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["rental"],
    }),
    // return rental
    returnRental: builder.mutation({
      query: (rentalInfo) => {
        const token = store.getState().auth.token;
        return {
          url: `/rentals/${rentalInfo.rentalId}/return`,
          method: "PUT",
          body: rentalInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["rental"],
    }),
    // getUserRentals
    getUserRentals: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/rentals",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["rental"],
    }),
    // user coupon payment
    userCouponPayment: builder.mutation({
      query: (rental) => {
        const token = store.getState().auth.token;
        return {
          url: `/rentals/${rental.id}/coupon?coupon=${rental.coupon}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["rental", "coupon", "bike"],
    }),
    // user  payment
    userPayment: builder.mutation({
      query: (id) => {
        const token = store.getState().auth.token;
        return {
          url: `/rentals/${id}/payment`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["rental", "coupon", "bike"],
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useGetAllRentalsQuery,
  useReturnRentalMutation,
  useGetUserRentalsQuery,
  useUserPaymentMutation,
  useUserCouponPaymentMutation
} = rentalAPi;
