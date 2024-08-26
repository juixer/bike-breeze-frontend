import { baseApi } from "../../api/baseApi";
import { store } from "../../store";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get profile information
    getUserProfile: builder.query({
      query: () => {
        const token = store.getState().auth.token;
        return {
          url: "/users/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['profile'],
    }),
    // update profile information
    updateUserProfile: builder.mutation({
      query: (userInfo) => {
        const token = store.getState().auth.token;
        return {
          url: "/users/me",
          method: "PUT",
          body: userInfo,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags:['profile']
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi;
