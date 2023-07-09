import "./App.css";
import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Create React App
					</a>
				</h1>
				<ul>
					<li>
						<pre>
							{`-`} Install: <code>npx create-react-app my-app</code>
						</pre>
						<pre>
							{`-`} Terminal: <code> cd my-app</code>
						</pre>
					</li>
					<li>
						<pre>
							{`-`} Run: <code>npm start</code>
						</pre>
					</li>
					<li>
						<pre>
							{`-`} Test: <code>npm test</code>
						</pre>
					</li>
					<li>
						<pre>
							{`-`} Build: <code>npm run build</code>
						</pre>
					</li>
					<li>
						<pre>
							{`-`} Install Local Production Server:{" "}
							<code>npm install serve</code>
						</pre>
						<pre>
							{`-`} Run Local Production Server (Port 3000):{" "}
							<code>serve -s build</code>
						</pre>
						<pre>
							{`-`} Run Local Production Server (Port 4000):{" "}
							<code>serve -s build -l 4000</code>
						</pre>
					</li>
					<li>
						<pre>
							package.json -->{" "}
							<code>
								"homepage": "https://username.github.io/my-app"
							</code>
						</pre>
						<pre>
							{`-`} Install GitHub Pages:{" "}
							<code>npm install --save gh-pages</code>
						</pre>
						<pre>
							package.json {`-->`} scripts {`-->`}{" "}
							<code>
								"predeploy": "npm run build", "deploy": "gh-pages -d
								build"
							</code>
						</pre>
						<pre>
							{`-`} Deployment on GitHub Pages:{" "}
							<code>npm run deploy</code>
						</pre>
						<pre>
							{`-`} Set Environment for the project on GitHub to{" "}
							<code>gh-pages</code>
						</pre>
					</li>
				</ul>
				<p></p>
			</header>
		</div>
	);
}

export default App;
