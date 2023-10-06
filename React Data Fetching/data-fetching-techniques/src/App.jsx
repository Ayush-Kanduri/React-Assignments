import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Data from "@/pages/Data";

function App() {
	return (
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
	);
}

export default App;