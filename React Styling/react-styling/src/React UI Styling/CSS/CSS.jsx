import "../../Button.css"; // Uses this CSS file Globally throughout the App even though it is inside the innermost component
import "./CSS.css"; // Removes the Button Ambiguity with BEM classes
import { useState } from "react";

// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ✔️
// Pseudo Classes ✔️
// CSS Nesting ✔️

const CSS = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className="styleScreen">
			<h1 className="styleScreen__heading">Change this heading</h1>
			<button className="styleScreen__button">Change this button</button>
			<a className="styleScreen__link" onClick={(e) => e.preventDefault()}>
				Change this link
			</a>
			<div
				id="styleScreen__boxContainer"
				className={disabled ? "styleScreen__boxContainer--disabled" : ""}
				onClick={() => setDisabled((prev) => !prev)}
			>
				{disabled ? "Disabled" : "Change this box"}
			</div>
		</div>
	);
};

export default CSS;
