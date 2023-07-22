import { useState, useTransition } from "react";

const UseTransition = (props) => {
	const [isPending, startTransition] = useTransition();
	const [input, setInput] = useState("");
	const [list, setList] = useState([]);
	const handleInput = (e) => {
		setInput(e.target.value);

		startTransition(() => {
			const LIST = [];
			for (let i = 0; i < 2000; i++) {
				LIST.push(e.target.value);
			}
			setList(LIST);
		});
	};
	return (
		<div className="hook3">
			<h1>{props.title} Hook</h1>
			<input
				type="text"
				value={input}
				name="text"
				onChange={handleInput}
				autoComplete="off"
			/>
			{isPending ? (
				<h1>Loading...</h1>
			) : (
				list.map((item, index) => <p key={index}>{item}</p>)
			)}
		</div>
	);
};

export default UseTransition;
