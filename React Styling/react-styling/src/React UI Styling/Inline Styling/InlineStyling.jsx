// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ❌
// Pseudo Classes ❌
// CSS Nesting ❌

const InlineStyling = () => {
	return (
		<div className="styleScreen">
			<h1
				style={{
					color: "var(--color-scheme2)",
					textShadow: "none",
					cursor: "pointer",
				}}
			>
				Change this heading
			</h1>
			<button style={styles.button}>Change this button</button>
			<a
				href=""
				onClick={(e) => e.preventDefault()}
				style={{
					textDecoration: "none",
					color: "var(--color-scheme2)",
					fontSize: "1.2rem",
					fontWeight: 500,
					cursor: "pointer",
				}}
			>
				Change this link
			</a>
			<div style={styles.box}>Change this box</div>
		</div>
	);
};

const styles = {
	button: {
		borderRadius: "10px",
		color: "black",
		border: "1px solid transparent",
		padding: "10px 15px",
		fontSize: "1rem",
		backgroundColor: "var(--color-scheme2)",
		fontWeight: 700,
		transition: "none",
		cursor: "pointer",
	},
	box: {
		width: "170px",
		height: "100px",
		backgroundColor: "var(--color-scheme2)",
		borderRadius: "10px",
		boxShadow: "0 0 10px 5px rgba(0,0,0,0.2)",
		color: "black",
		fontSize: "1rem",
		fontWeight: 800,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		cursor: "pointer",
	},
};

export default InlineStyling;
