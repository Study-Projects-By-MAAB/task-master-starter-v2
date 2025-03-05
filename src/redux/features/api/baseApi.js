import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5000",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: "/tasks",
    }),
  }),
});

export default baseApi;
