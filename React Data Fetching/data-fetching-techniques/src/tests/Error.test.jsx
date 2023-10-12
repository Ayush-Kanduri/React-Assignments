import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Error from "@/components/Error";

describe("Error", () => {
	it("should render a button with the correct text", () => {
		const { getByRole } = render(<Error text="error" />);
		const button = getByRole("button");
		expect(button).toHaveTextContent("RESET");
		expect(button).toBeInTheDocument();
	});
	it("should display the correct message", () => {
		const message = "error";
		const { getByRole } = render(<Error text={message} />);
		const h1 = getByRole("heading");
		expect(h1).toHaveTextContent(message);
	});
	it("should display the correct error message", () => {
		const message = "error message";
		const { getByTestId } = render(<Error error={{ message }} />);
		const p = getByTestId("para");
		expect(p).toBeInTheDocument();
		expect(p).toHaveTextContent(message);
	});
	it("should reload the page on clicking reset button", async () => {
		const reloadMock = vi.fn();
		Object.defineProperty(window, "location", {
			value: { reload: reloadMock },
			writable: true,
		});
		render(<Error />);
		const button = screen.getByRole("button", { name: "RESET" });
		await userEvent.click(button);
		expect(reloadMock).toHaveBeenCalled();
	});
});
