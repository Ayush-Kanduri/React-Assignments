import "./App.css";
import logo from "./logo.svg";
import Commands from "./components/Commands";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
					onClick={(e) => (window.location.href = `https://react.dev`)}
				/>
				<h1>
					<a
						className="App-link"
						href="https://create-react-app.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						{process.env.REACT_APP_TITLE}
					</a>
				</h1>
				<Commands />
			</header>
		</div>
	);
}

export default App;
