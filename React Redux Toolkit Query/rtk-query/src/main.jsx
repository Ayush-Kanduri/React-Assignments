import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RTKQRR from "@/RTKQRR";
import { Store } from "@/redux/store/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import RTKQ from "@/RTKQ";
import { Api } from "@/redux/api/api.js";

// This implements Redux Toolkit Query without React-Redux

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApiProvider api={Api}>
		<RTKQ />
	</ApiProvider>
);

// This implements Redux Toolkit Query with React-Redux

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<Provider store={Store}>
// 		<RTKQRR />
// 	</Provider>
// );
