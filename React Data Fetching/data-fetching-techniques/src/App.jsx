import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Data from "@/pages/Data";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

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
			<NextUIProvider>
				<div className="app h-screen w-screen relative p-5 ">
					<Router>
						<Routes>
							<Route path="/">
								<Route index element={<Home />} />
								<Route path="data">
									<Route path=":id" element={<Data />} />
								</Route>
							</Route>
						</Routes>
					</Router>
				</div>
			</NextUIProvider>
		</QueryClientProvider>
	);
}

export default App;
