import UICard from "@/components/UICard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const Strategy1 = () => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => res.json())
			.then((data) => {
				setState(data);
				setLoading(false);
			})
			.catch((err) => {
				setState(["ERROR"]);
				setLoading(false);
			});
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
			{state[0] === "ERROR" && <Error />}
		</>
	);
};

export default Strategy1;
