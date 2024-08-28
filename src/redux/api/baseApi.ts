import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        // backendURL
        baseUrl: "https://bike-breeze.vercel.app/api",
        credentials: "include",
    }),
    tagTypes:["profile", "bike", "user", "rental","review","coupon"],
    endpoints: () => ({})
})