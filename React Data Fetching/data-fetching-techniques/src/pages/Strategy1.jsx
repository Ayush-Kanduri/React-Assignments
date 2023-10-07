import UICard from "@/components/UICard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Strategy1 = () => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetcher = async (...args) => {
			try {
				const res = await fetch(...args);
				const data = await res.json();
				setState(data);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				console.error(err);
			}
		};
		fetcher(`https://jsonplaceholder.typicode.com/posts`);
	}, []);
	return (
		<>
			{!loading &&
				state.map((item, index) => (
					<UICard
						key={index}
						id={item.id}
						title={item.title}
						content={item.body}
					/>
				))}
			{loading && <Loader />}
		</>
	);
};

export default Strategy1;
