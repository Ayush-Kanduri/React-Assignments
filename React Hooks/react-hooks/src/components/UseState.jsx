import { useState } from "react";

const UseState = (props) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const handleEmail = (e) => setEmail(e.target.value);
	const handleName = (e) => setName(e.target.value);
	return (
		<div className="hook1">
			<h1>{props.title} Hook</h1>
			<div>
				<label htmlFor="email">Email: </label>
				<input
					autoFocus
					autoComplete="off"
					type="text"
					name="email"
					value={email}
					onChange={handleEmail}
				/>
			</div>
			<div>
				<label htmlFor="name">Name: </label>
				<input
					autoComplete="off"
					type="text"
					name="name"
					value={name}
					onChange={handleName}
				/>
			</div>
			<p>
				Email{` --> `}&nbsp;
				{email}
			</p>
			<p>
				Name{` --> `}&nbsp;
				{name}
			</p>
		</div>
	);
};

export default UseState;
