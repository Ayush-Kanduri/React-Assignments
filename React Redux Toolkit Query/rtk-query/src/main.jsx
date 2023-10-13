import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "@/redux/store/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import App from "@/App";
import { Api } from "@/redux/api/api.js";

// This implements Redux Toolkit Query without React-Redux

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<ApiProvider api={Api}>
// 		<App text="Redux Toolkit Query (Without React-Redux)" />
// 	</ApiProvider>
// );

// This implements Redux Toolkit Query with React-Redux

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={Store}>
		<App text="Redux Toolkit Query (With React-Redux)" />
	</Provider>
);
