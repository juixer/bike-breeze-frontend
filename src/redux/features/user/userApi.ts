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
      providesTags: ["profile"],
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
      invalidatesTags: ["profile"],
    }),
    // get all users
    getAllUsers: builder.query({
      query: (email) => {
        const token = store.getState().auth.token;
        return {
          url: `/users/all-users?email=${email}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["user"],
    }),
    // delete user profile
    deleteUser: builder.mutation({
      query: (email) => {
        const token = store.getState().auth.token;
        return {
          url: `/users/delete/${email}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["profile", "user"],
    }),
    // Promote user
    promoteUser: builder.mutation({
      query: (email) => {
        const token = store.getState().auth.token;
        return {
          url: `/users/promote/${email}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["profile", "user"],
    }),
    // Promote user
    demoteUser: builder.mutation({
      query: (email) => {
        const token = store.getState().auth.token;
        return {
          url: `/users/demote/${email}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["profile", "user"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  usePromoteUserMutation,
  useDemoteUserMutation,
} = userApi;
