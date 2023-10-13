import Strategy1 from "@/pages/Strategy1";
import Strategy2 from "@/pages/Strategy2";
import Loader from "@/components/Loader.jsx";
import { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import Error from "@/components/Error";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Strategy3 from "@/pages/Strategy3";
import Strategy4 from "@/pages/Strategy4";
import Strategy5 from "@/pages/Strategy5";

const Content = ({ id }) => {
	return (
		<Suspense fallback={<Loader />}>
			<div className="flex flex-wrap justify-evenly items-center gap-10 w-full p-5">
				{id === "useEffect()" ? (
					<ReactErrorBoundary
						FallbackComponent={Error}
						onError={(error) => console.log(error)}
						onReset={() => window.location.reload()}
					>
						<Strategy1 />
					</ReactErrorBoundary>
				) : id === "SWR" ? (
					<ReactErrorBoundary
						FallbackComponent={Error}
						onError={(error) => console.log(error)}
						onReset={() => window.location.reload()}
					>
						<Strategy2 />
					</ReactErrorBoundary>
				) : id === "Custom Error Boundary" ? (
					<ErrorBoundary fallback={<Error />}>
						<Strategy3 />
					</ErrorBoundary>
				) : id === "React Query" ? (
					<ReactErrorBoundary
						FallbackComponent={Error}
						onError={(error) => console.log(error)}
						onReset={() => window.location.reload()}
					>
						<Strategy4 />
					</ReactErrorBoundary>
				) : id === "React RTK Query" ? (
					<ReactErrorBoundary
						FallbackComponent={Error}
						onError={(error) => console.log(error)}
						onReset={() => window.location.reload()}
					>
						<Strategy5 />
					</ReactErrorBoundary>
				) : null}
			</div>
		</Suspense>
	);
};

export default Content;
