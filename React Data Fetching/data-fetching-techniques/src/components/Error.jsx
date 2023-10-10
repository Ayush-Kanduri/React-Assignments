import { LuAlertTriangle, LuTrash2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const Error = ({ error, resetErrorBoundary, text = "Something went wrong!" }) => {
	return (
		<div className="flex justify-between items-center space-y-9 pt-10 flex-col">
			<div className="w-full flex flex-col justify-center items-center space-y-5">
				<h1 className="flex justify-between items-center gap-3 font-extrabold text-center text-4xl text-red-500 animate-bounce ">
					<LuAlertTriangle className="text-red-500 text-4xl" />
					{text}
				</h1>
				<p data-testid="para" className="text-center text-gray-500 text-xl">
					{error?.message}
				</p>
			</div>
			<Button
				size="lg"
				variant="outline"
				className="text-red-500 border-red-200 hover:bg-red-100 hover:text-red-500 font-bold border-2 tracking-wide gap-3 "
				onClick={resetErrorBoundary || (() => window.location.reload())}
			>
				<LuTrash2 className="text-xl" /> RESET
			</Button>
		</div>
	);
};

export default Error;
