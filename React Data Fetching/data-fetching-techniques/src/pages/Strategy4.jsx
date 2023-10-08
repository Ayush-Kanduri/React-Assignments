import UICard from "@/components/UICard";
import { useQuery } from "react-query";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Strategy4 = () => {
	const { data, error, isLoading } = useQuery("posts", () => {
		return fetcher("https://jsonplaceholder.typicode.com/posts");
	});
	if (error) throw error;
	return (
		<>
			{data.map((item, index) => (
				<UICard
					key={index}
					id={item.id}
					title={item.title}
					content={item.body}
				/>
			))}
		</>
	);
};

export default Strategy4;
