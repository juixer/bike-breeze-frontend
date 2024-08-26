import { baseApi } from "../../api/baseApi";
import { store } from "../../store";


const userApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
        // get profile information
        getUserProfile: builder.query({
            query:() => {
                const token = store.getState().auth.token
                return {
                    url: "/users/me",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            }
        })
    })
})

export const {useGetUserProfileQuery } = userApi;