import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "posts",
			providesTags: ["Post"],
		}),
		createPost: builder.mutation({
			query: (post) => ({
				url: "create-post",
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
		updatePost: builder.mutation({
			query: ({ id, title }) => ({
				url: `posts/${id}`,
				method: "PUT",
				body: { title },
			}),
			invalidatesTags: ["Post"],
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `posts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});

export const {
	useGetPostsQuery,
	useCreatePostMutation,
	useUpdatePostMutation,
	useDeletePostMutation,
} = Api;
