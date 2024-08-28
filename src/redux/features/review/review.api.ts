import { baseApi } from "../../api/baseApi";
import { store } from "../../store";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // write Review
    writeReview: builder.mutation({
      query: (reviewInfo) => {
        const token = store.getState().auth.token;
        return {
          url: "/reviews",
          method: "POST",
          body: reviewInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["review"],
    }),
    // get all reviews
    getAllReviews: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/reviews",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["review"],
    }),
    // verified reviews
    verifiedReviews: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/reviews/verified",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["review"],
    }),
    // not Verified reviews
    notVerifiedReviews: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/reviews/not-verified",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["review"],
    }),
    // latest reviews
    getLatestReviews: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/reviews/latest",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["review"],
    }),
    // verify reviews
    verifyReview: builder.mutation({
      query: (reviewId) => {
        const token = store.getState().auth.token;
        return {
          url: `/reviews/${reviewId}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["review"],
    }),
    // delete reviews
    deleteReview: builder.mutation({
      query: (reviewId) => {
        const token = store.getState().auth.token;
        return {
          url: `/reviews/${reviewId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useWriteReviewMutation,
  useGetAllReviewsQuery,
  useVerifiedReviewsQuery,
  useNotVerifiedReviewsQuery,
  useGetLatestReviewsQuery,
  useVerifyReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
