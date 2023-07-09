const Commands = () => {
	return (
		<>
			<ul>
				<li>
					<pre>
						{`-`} Install: <code>npx create-next-app@latest my-app</code>
					</pre>
					<pre>
						{`-`} Terminal: <code>cd my-app</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Run (PORT 3000): <code>npm run dev</code>
					</pre>
					<pre>
						{`-`} Run (PORT 4000):
						{" package.json --> scripts --> "}
						<code>next dev -p 4000</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Build: <code>npm run build</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Run Local Production Server (PORT 3000):{" "}
						<code>npm run start</code>
					</pre>
					<pre>
						{`-`} Run Local Production Server (PORT 4000):
						{" package.json --> scripts --> "}
						<code>next start -p 4000</code>
					</pre>
				</li>
				<li>
					<pre>
						{`-`} Environment Variables:{" "}
						<code>VERCEL_LOGO=/vercel.svg</code>
					</pre>
					<pre>
						{`-`} Environment Variables:{" "}
						<code>{"process.env.VERCEL_LOGO"}</code>
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
