import Loader from "@/components/Loader";
import UICard from "@/components/UICard";
import { useGetPostsQuery } from "@/redux/api/api";

const Strategy5 = () => {
	const { data, error, isLoading, isError, isSuccess, isFetching } =
		useGetPostsQuery();
	if (isLoading) return <Loader />;
	if (isError) throw error;
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

export default Strategy5;
