import { useState } from "react";
import "./App.css";
import Hooks from "./components/Hooks";

function App() {
	const hooks = ["useState()", "useEffect()", "useTransition()"];
	const [hook, setHook] = useState("");
	return (
		<div className={hook === "" ? `app` : `hook-screen`}>
			{hook === "" ? (
				hooks.map((item, index) => (
					<Buttons key={index} title={item} setHook={setHook} />
				))
			) : (
				<Hooks title={hook} />
			)}
		</div>
	);
}

const Buttons = (props) => {
	const renderHook = () => props.setHook(props.title);
	return (
		<button style={{ fontSize: "2rem" }} onClick={renderHook}>
			{props.title}
		</button>
	);
};

export default App;
