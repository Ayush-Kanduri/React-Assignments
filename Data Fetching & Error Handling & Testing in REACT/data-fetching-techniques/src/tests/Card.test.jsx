import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import UICard from "@/components/UICard";

describe("Card", () => {
	it("should display the correct title", () => {
		const message = "title";
		const { getByTestId } = render(<UICard title={message} />);
		const title = getByTestId("title");
		const post = getByTestId("post");
		expect(title).toBeInTheDocument();
		expect(post).toBeInTheDocument();
		expect(title).toHaveTextContent(message);
		expect(post).toHaveTextContent("Post");
	});
	it("should display the correct post content", () => {
		const message = "content";
		const { getByTestId } = render(<UICard content={message} />);
		const content = getByTestId("content");
		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent(message);
	});
});
