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
  }),
});

export const {
  useCreateRentalMutation,
  useGetAllRentalsQuery,
  useReturnRentalMutation,
} = rentalAPi;
