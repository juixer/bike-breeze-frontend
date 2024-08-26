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
      query: (query) => {
        const token = store.getState().auth.token;
        return {
          url: `/bikes/all-bikes?name=${query.name}&brand=${query.brand}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["bike"],
    }),
    // delete Bike
    deleteBike: builder.mutation({
      query: (bikeId) => {
        const token = store.getState().auth.token;
        return {
          url: `/bikes/${bikeId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["bike"],
    }),
    // bike brand
    getBikeBrand: builder.query({
      query: () => ({
        url: "/bikes/brands",
        method: "GET",
      }),
    }),
    //update bike info
    updateBikeInfo: builder.mutation({
      query: (bikeInfo) => {
        const token = store.getState().auth.token;
        return {
          url: `/bikes/${bikeInfo.id}`,
          method: "PUT",
          body: bikeInfo.data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["bike"],
    }),
    // get single bike info
    getSingleBikeInfo: builder.query({
      query:(bikeID) => {
        return{
          url: `/bikes/${bikeID}`,
          method: "GET"
        }
      },
      providesTags:["bike"]
    })
  }),
});

export const {
  useAddBikeMutation,
  useGetAllBikesQuery,
  useDeleteBikeMutation,
  useGetBikeBrandQuery,
  useUpdateBikeInfoMutation,
  useGetSingleBikeInfoQuery
} = bikesApi;
