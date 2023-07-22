import { useState, useEffect } from "react";

const UseEffect = (props) => {
	const [userId, setUserId] = useState(1);
	const [data, setData] = useState([]);

	// Component Did Mount
	// useEffect(() => {
	// 	fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);

	// Component Did Update (Component Did Mount + Component Did Update[if any change])
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [userId]);

	// Component Will Unmount
	// const handleClick = (e) => {
	// 	console.log(e.clientX);
	// };
	// useEffect(() => {
	// 	// setData() --> (Never) Infinite Loop
	// 	document.addEventListener("click", handleClick);
	// 	return () => document.removeEventListener("click", handleClick);
	// });

	return (
		<div className="hook2">
			<h1>{props.title} Hook</h1>
			{data.length !== 0 && (
				<button onClick={() => setUserId((prev) => prev + 1)}>
					Change User
				</button>
			)}
			{data.length === 0 && (
				<button onClick={() => setUserId((prev) => prev + 1)}>
					Change User
				</button>
			)}
			{data.length !== 0 ? <h2>User &nbsp;{userId}&nbsp; Data</h2> : ""}
			<div>
				{data.length !== 0 ? (
					data.map((post) => <p key={post.id}>{post.title}</p>)
				) : (
					<h2>No Data Exists</h2>
				)}
			</div>
		</div>
	);
};

export default UseEffect;
