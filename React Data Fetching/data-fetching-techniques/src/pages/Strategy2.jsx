import UICard from "@/components/UICard";
import useSWR from "swr";
import fetcher from "@/utils/Fetcher";
import Loader from "@/components/Loader";

const Strategy2 = () => {
	const { data, error, isLoading } = useSWR(
		`https://jsonplaceholder.typicode.com/posts`,
		fetcher,
		{ suspense: true }
	);
	if (isLoading) return <Loader />;
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
