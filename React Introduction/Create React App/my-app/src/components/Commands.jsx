const Commands = () => {
	return (
		<>
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
						{`-`} Environment Variables:{" "}
						<code>REACT_APP_TITLE=Create React App</code>
					</pre>
					<pre>
						{`-`} Environment Variables:{" "}
						<code>process.env.REACT_APP_TITLE</code>
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
						package.json {`--> `}
						<code>{`homepage: https://username.github.io/my-app`}</code>
					</pre>
					<pre>
						{`-`} Install GitHub Pages:{" "}
						<code>npm install --save gh-pages</code>
					</pre>
					<pre>
						package.json {`-->`} scripts {`--> `}
						<code>
							{`predeploy: npm run build", "deploy": "gh-pages -d build`}
						</code>
					</pre>
					<pre>
						{`-`} Deployment on GitHub Pages: <code>npm run deploy</code>
					</pre>
					<pre>
						{`-`} Set Environment for the project on GitHub to{" "}
						<code>gh-pages</code>
					</pre>
				</li>
			</ul>
		</>
	);
};

export default Commands;
