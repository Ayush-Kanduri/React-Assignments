import UICard from "@/components/UICard";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Strategy2 = () => {
	const { data, error } = useSWR(
		`https://jsonplaceholder.typicode.com/posts`,
		fetcher,
		{ suspense: true }
	);
	if (error) throw error;
	return (
		<>
			{data?.map((item, index) => (
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

export default Strategy2;
