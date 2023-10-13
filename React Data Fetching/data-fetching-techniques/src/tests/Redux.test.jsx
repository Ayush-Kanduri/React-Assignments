import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { API } from "@/redux/api/api";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import Strategy5 from "@/pages/Strategy5";
import { rest } from "msw";
import { setupServer } from "msw/node";

const data = [
	{ id: 1, title: "First Post" },
	{ id: 2, title: "Second Post" },
];

const server = setupServer(
	rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
		return res(ctx.json(data), ctx.status(200));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Fetching the data", () => {
	it("should fetch the data successfully", async () => {
		render(
			<ApiProvider api={API}>
				<Strategy5 />
			</ApiProvider>
		);
		await waitFor(() => {
			expect(screen.getAllByTestId("post").length).toBeGreaterThan(0);
		});
	});
});

describe("Testing getPosts", () => {
	it("getPosts query endpoint is correctly defined", () => {
		expect(API.endpoints).toHaveProperty("getPosts");
	});
});
