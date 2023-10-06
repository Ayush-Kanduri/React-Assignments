import Strategy1 from "@/pages/Strategy1";
import Strategy2 from "@/pages/Strategy2";
import Loader from "@/components/Loader.jsx";
import { Suspense } from "react";

const Content = ({ id }) => {
	return (
		<Suspense fallback={<Loader />}>
			<div className="flex flex-wrap justify-evenly items-center gap-10 w-full p-5">
				{id === "useEffect()" ? (
					<Strategy1 />
				) : id === "SWR" ? (
					<Strategy2 />
				) : null}
			</div>
		</Suspense>
	);
};

export default Content;
