const Commands = () => {
	return (
		<>
			<ul>
				<li>
					<pre>
						{`-`} Install: <code>npm create vite@latest my-app</code>
					</pre>
					<pre>
						<code>
							npm create vite@latest my-app -- --template [react
							react-ts vanilla vanilla-ts]
						</code>
					</pre>
					<pre>
						{`-`} Terminal: <code> cd my-app</code>
					</pre>
					<pre>
						vite.config.js {`--> `}defineConfig {`--> `}
						<code>{`server: {port: 3000}`}</code>
					</pre>
					<pre>
						{`-`} NPM Install: <code>npm install</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Run: <code>npm run dev</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Build: <code>npm run build</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Run Local Production Server (PORT 4173):{" "}
						<code>npm run preview</code>
					</pre>
					<pre>
						{`-`} Run Local Production Server (PORT 8000):{" "}
						<code>npm run preview --port 8000</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Environment Variables:{" "}
						<code>VITE_URL=http://localhost/3000</code>
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
