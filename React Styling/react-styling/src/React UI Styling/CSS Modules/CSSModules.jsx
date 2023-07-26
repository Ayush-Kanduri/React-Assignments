import classes from "./CSSModules.module.css"; // CSS Modules removes the Ambiguity
import { useState } from "react";

/** 
	* Follows the @BEM (Block Element Modifier) Naming Convention
		@Block 
		styleScreen - This is a block of styles for our screen component, which contains multiple elements.
		@Element 
		styleScreen__heading - This is an element of the styleScreen block, which is a heading.
		@Modifier 
		styleScreen__heading--color-red - This is a modifier of the styleScreen__heading element, which makes the heading red.
		styleScreen__heading--disabled - This is a modifier of the styleScreen__heading element, which makes the heading disabled.
**/

// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ✔️
// Pseudo Classes ✔️
// CSS Nesting ✔️

const CSSModules = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className={classes.styleScreen}>
			<h1 className={classes.styleScreen__heading}>Change this heading</h1>
			<button
				className={`${classes.styleScreen__button} ${classes["styleScreen__button--bg-wheat"]}`}
			>
				Change this button
			</button>
			<a
				className={classes.styleScreen__link}
				onClick={(e) => e.preventDefault()}
			>
				Change this link
			</a>
			<div
				className={`${classes.styleScreen__boxContainer} ${
					classes["styleScreen__boxContainer--bg-wheat"]
				} ${disabled ? classes["styleScreen__boxContainer--disabled"] : ""}`}
				onClick={() => setDisabled((prev) => !prev)}
			>
				{disabled ? "Disabled" : "Change this box"}
			</div>
		</div>
	);
};

export default CSSModules;
