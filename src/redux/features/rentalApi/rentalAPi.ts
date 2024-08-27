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
    }),
  }),
});

export const {useCreateRentalMutation} = rentalAPi;
