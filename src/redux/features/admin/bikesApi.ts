import { baseApi } from "../../api/baseApi";
import { store } from "../../store";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add bike into DB
    addBike: builder.mutation({
      query: (bikeInfo) => {
        const token = store.getState().auth.token;
        return {
          url: "/bikes",
          method: "POST",
          body: bikeInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["bike"],
    }),
    // get all bikes from DB
    getAllBikes: builder.query({
        query:()=>({
            url: "/bikes",
            method: "GET",
        }),
        providesTags:["bike"]
    })
  }),
});

export const { useAddBikeMutation, useGetAllBikesQuery } = bikesApi;
