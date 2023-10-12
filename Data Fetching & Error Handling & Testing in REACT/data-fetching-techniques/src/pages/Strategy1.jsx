import UICard from "@/components/UICard";
import Loader from "@/components/Loader";
import useFetch from "@/hooks/useFetch";
import { Button } from "@/components/ui/button";
import { LuUndo2 } from "react-icons/lu";

const Strategy1 = () => {
	const {
		data: state,
		loading,
		error,
		refetch,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts`);
	if (error) throw new Error(error);
	if (loading) return <Loader />;
	return (
		<>
			{state?.map((item, index) => (
				<UICard
					key={index}
					id={item.id}
					title={item.title}
					content={item.body}
				/>
			))}
			<Button
				size="lg"
				variant="outline"
				className="text-blue-500 border-blue-200 hover:bg-blue-100 hover:text-blue-500 font-bold border-2 tracking-wide gap-3"
				onClick={refetch}
			>
				<LuUndo2 className="text-xl" /> Refetch
			</Button>
		</>
	);
};

export default Strategy1;
