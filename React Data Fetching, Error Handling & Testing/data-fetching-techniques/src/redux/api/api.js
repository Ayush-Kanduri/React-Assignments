import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
		// baseUrl: "http://localhost:3000/",
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "posts",
			providesTags: ["Post"],
		}),
	}),
});

export const { useGetPostsQuery } = API;
