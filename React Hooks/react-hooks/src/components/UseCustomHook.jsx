import { useState } from "react";

const useFormInput = (initialState) => {
	const [value, setValue] = useState(initialState);
	const handleInput = (e) => setValue(e.target.value);
	return { value, onChange: handleInput };
};

const UseCustomHook = (props) => {
	return (
		<div className="hook1">
			<h1>{props.title} Hook</h1>
			<LoginForm />
			<SignUpForm />
		</div>
	);
};

const LoginForm = () => {
	const email = useFormInput("");
	const password = useFormInput("");
	return (
		<>
			<div>
				<label htmlFor="email">Email: </label>
				<input
					autoFocus
					autoComplete="off"
					type="text"
					name="email"
					{...email}
				/>
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input
					autoComplete="off"
					type="text"
					name="password"
					{...password}
				/>
			</div>
			<p>
				Email{` --> `}&nbsp;
				{email.value}
			</p>
			<p>
				Password{` --> `}&nbsp;
				{password.value}
			</p>
		</>
	);
};

const SignUpForm = () => {
	const email = useFormInput("");
	const password = useFormInput("");
	const confirmPassword = useFormInput("");
	return (
		<>
			<div>
				<label htmlFor="email">Email: </label>
				<input
					autoComplete="off"
					type="text"
					name="email"
					value={email.value}
					onChange={email.onChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password: </label>
				<input
					autoComplete="off"
					type="text"
					name="password"
					value={password.value}
					onChange={password.onChange}
				/>
			</div>
			<div>
				<label htmlFor="confirmpassword">Confirm Password: </label>
				<input
					autoComplete="off"
					type="text"
					name="confirmpassword"
					value={confirmPassword.value}
					onChange={confirmPassword.onChange}
				/>
			</div>
			<p>
				Email{` --> `}&nbsp;
				{email.value}
			</p>
			<p>
				Password{` --> `}&nbsp;
				{password.value}
			</p>
			<p>
				Confirm Password{` --> `}&nbsp;
				{confirmPassword.value}
			</p>
		</>
	);
};

export default UseCustomHook;

/**
const UseCustomHook = () => {
	const [isTextChanged, setIsTextChanged] = useToggle();
	return <>{isTextChanged ? "Toggled" : "Click to Toggle"}</>;
};

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);
	const toggle = useEffect(() => setState((state) => !state), []);
	return [state, toggle];
};
**/
