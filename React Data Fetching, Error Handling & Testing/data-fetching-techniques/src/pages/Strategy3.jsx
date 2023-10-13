import Loader from "@/components/Loader";
import { useEffect } from "react";

const Strategy3 = () => {
	useEffect(() => {
		throw new Error("This is a custom error handled by ErrorBoundary!");
	}, []);
	return (
		<>
			<Loader />
		</>
	);
};

export default Strategy3;
