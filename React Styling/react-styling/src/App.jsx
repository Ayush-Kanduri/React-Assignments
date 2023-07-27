import { useState } from "react";
import "./App.css";
import Styles from "./components/Styles";
import UIComponents from "./components/UIComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./React UI Styling/Styled Components/GlobalStyles";

const theme = {
	colors: {
		color1: "black",
		color2: "red",
		color3: "var(--color-scheme6)",
	},
	responsive: {
		mobile: "576px",
		tablet: "768px",
		desktop: "992px",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}></Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

const Layout = () => {
	const pages = {
		styles: [
			"CSS",
			"CSS modules",
			"inline styling",
			"SCSS",
			"tailwind CSS",
			"styled components",
		],
		components: ["material UI", "shadCN UI", "radix UI", "bootstrap UI"],
	};
	const [page, setPage] = useState("");
	return (
		<div className="app">
			{!page && (
				<Buttons title="styles" setPage={setPage} styles={pages["styles"]} />
			)}
			{!page && (
				<Buttons
					title="components"
					setPage={setPage}
					components={pages["components"]}
				/>
			)}
			{page === "styles"
				? pages[page]?.map((item, index) => {
						return (
							<Buttons
								key={index}
								title={item}
								setPage={setPage}
								styles={pages["styles"]}
							/>
						);
				  })
				: pages[page]?.map((item, index) => {
						return (
							<Buttons
								key={index}
								title={item}
								setPage={setPage}
								styles={pages["components"]}
							/>
						);
				  })}
			{pages["styles"].includes(page) && <Styles title={page} />}
			{pages["components"].includes(page) && <UIComponents title={page} />}
			{/* 'in' for objects (keys) --> {key: value} (key in object) is true */}
			{/* 'includes' for arrays (values) --> [1,2] (array.includes(1)) is true */}
		</div>
	);
};

const Buttons = (props) => {
	const renderPage = () => props.setPage(props.title);
	return (
		<button
			style={{ fontSize: "2rem", textTransform: "capitalize" }}
			onClick={renderPage}
		>
			{props.title}
		</button>
	);
};

export default App;
