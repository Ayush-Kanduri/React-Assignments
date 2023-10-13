import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		"import.meta.vitest": "undefined",
	},
	test: {
		includeSource: ["src/**/*.test.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}"],
		exclude: ["node_modules", "build", "dist", "public", "src/components/ui"],
		coverage: {
			reporter: ["html", "text"],
			exclude: [
				"node_modules",
				"build",
				"dist",
				"public",
				"src/components/ui",
			],
		},
		globals: true,
		environment: "jsdom",
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), //npm i @types/node
		},
	},
	server: {
		open: true, //Opens browser on server start
		port: 8000, //Dev Port
	},
	build: {
		//Build folder path
		outDir: "build",
	},
	//Defines the base URL for the routing & the asset URL in the App.
	base: "/", //Same as homepage in CRA.
});