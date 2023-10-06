import UICard from "@/components/UICard";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

const Content = ({ id }) => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const UE = () => {
			fetch(`https://jsonplaceholder.typicode.com/posts`)
				.then((res) => res.json())
				.then((data) => {
					setState(data);
					setLoading(false);
				});
		};
		if (id === "useEffect()") UE();
	}, [id]);
	return (
		<div className="flex flex-wrap justify-evenly items-center gap-10 w-full p-5">
			{!loading &&
				state.map((item, index) => (
					<UICard
						key={index}
						id={item.id}
						title={item.title}
						content={item.body}
					/>
				))}
			{loading && <Spinner size="lg" label="Loading..." color="primary" />}
		</div>
	);
};

export default Content;
