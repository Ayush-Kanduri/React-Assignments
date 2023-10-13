import { configureStore } from "@reduxjs/toolkit";
import { Api } from "@/redux/api/api";
import { Reducer } from "@/redux/reducers/reducer";

export const Store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer,
		[Reducer.name]: Reducer.reducer,
	},
	middleware: (middleware) => [...middleware(), Api.middleware],
});
