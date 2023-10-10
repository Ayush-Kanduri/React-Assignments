import { describe, it, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Button from "@/components/Button";

describe("Button", () => {
	it("should render a button with the correct text & link", () => {
		const text = "Click";
		const { getByText } = render(
			<MemoryRouter initialEntries={["/"]}>
				<Button text={text} />
			</MemoryRouter>
		);
		expect(getByText(text)).toBeInTheDocument();
		expect(getByText(text)).toHaveTextContent(text);
		expect(getByText(text)).toHaveAttribute("href", `/data/${text}`);
	});
	it("should check if it navigates to correct link after click", async () => {
		const text = "Click";
		const { getByText } = render(
			<MemoryRouter initialEntries={["/"]}>
				<Button text={text} />
			</MemoryRouter>
		);
		fireEvent.click(getByText(text));
		setTimeout(() => {
			expect(window.location.pathname).toBe(`/data/${text}`);
		}, 3000);
	});
});
