import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { API } from "@/redux/api/api";
import LazyLoading from "@/utils/LazyLoading";
import { Suspense } from "react";
import Loader2 from "@/components/Loader2";

const Home = LazyLoading("../pages/Home.jsx");
const Data = LazyLoading("../pages/Data.jsx", "Data");

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				suspense: true,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<ApiProvider api={API}>
				<NextUIProvider>
					<div className="app h-screen w-screen relative p-5 justify-center items-center flex">
						<Router>
							<Suspense fallback={<Loader2 />}>
								<Routes>
									<Route path="/">
										<Route index element={<Home />} />
										<Route path="data">
											<Route path=":id" element={<Data />} />
										</Route>
									</Route>
								</Routes>
							</Suspense>
						</Router>
					</div>
				</NextUIProvider>
			</ApiProvider>
		</QueryClientProvider>
	);
}

export default App;
