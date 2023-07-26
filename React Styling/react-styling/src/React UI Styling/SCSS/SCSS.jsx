import { useState } from "react";
import styles from "./SCSS.module.scss";

// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ✔️
// Pseudo Classes ✔️
// CSS Nesting ✔️

const SCSS = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className={styles.styleScreen}>
			<h1 className={styles.styleScreen__heading}>Change this heading</h1>
			<button
				className={`${styles.styleScreen__button} ${styles["styleScreen__button--bg-wheat"]}`}
			>
				Change this button
			</button>
			<a
				className={styles.styleScreen__link}
				onClick={(e) => e.preventDefault()}
			>
				Change this link
			</a>
			<div
				className={`${styles.styleScreen__boxContainer} ${
					styles["styleScreen__boxContainer--bg-wheat"]
				} ${disabled ? styles["styleScreen__boxContainer--disabled"] : ""}`}
				onClick={() => setDisabled((prev) => !prev)}
			>
				{disabled ? "Disabled" : "Change this box"}
			</div>
		</div>
	);
};

export default SCSS;
