import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        // backendURL
        baseUrl: "http://localhost:5000/api",
        credentials: "include",
    }),
    tagTypes:["profile", "bike", "user", "rental"],
    endpoints: () => ({})
})