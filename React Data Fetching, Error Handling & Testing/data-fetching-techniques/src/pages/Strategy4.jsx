import UICard from "@/components/UICard";
import { useQuery } from "react-query";
import fetchData from "@/utils/Axios";
import Loader from "@/components/Loader";

const Strategy4 = () => {
	const key = "posts";
	const { data, error, isLoading } = useQuery(key, () => fetchData(key));
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

export default Strategy4;
