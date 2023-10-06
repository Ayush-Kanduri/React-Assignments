import { useParams } from "react-router-dom";
import Content from "@/pages/Content";

const Data = () => {
	const { id } = useParams();
	return (
		<div className="p-3 flex flex-col justify-start items-center h-full w-full space-y-10">
			<h1 className="font-bold text-center text-4xl">{id}</h1>
			<Content id={id} />
		</div>
	);
};

export default Data;
