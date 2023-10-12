import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, act, waitFor, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetch from "@/hooks/useFetch";
import useSWR from "swr";
import { useQuery } from "react-query";
import Strategy2 from "@/pages/Strategy2";
import Strategy3 from "@/pages/Strategy3";
import Strategy4 from "@/pages/Strategy4";

const responseData = { message: "Data fetched successfully" };
const error = new Error("Failed to fetch");
let url = "https://jsonplaceholder.typicode.com/posts";
vi.mock("swr");
vi.mock("react-query");

describe("Fetching the Data using useFetch()", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should fetch the data successfully", async () => {
		globalThis.fetch = vi.fn();
		globalThis.fetch.mockResolvedValueOnce({
			json: async () => responseData,
		});
		const { result } = renderHook(() => useFetch(url));
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(result?.current?.data).toEqual(responseData);
		});
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe(null);

		setTimeout(() => {
			expect(screen.getByTestId("post")).toBeInTheDocument();
		}, 5000);
	});

	it("should throw an error", async () => {
		globalThis.fetch = vi.fn();
		globalThis.fetch.mockRejectedValueOnce(error);
		const { result } = renderHook(() => useFetch(`${url}/INVALID_URL_PATH`));
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(result?.current?.error).toEqual(error);
		});
		expect(result.current.loading).toBe(false);
		expect(result.current.data).toBe(null);
	});

	it("should refetch the data successfully", async () => {
		globalThis.fetch = vi.fn();
		globalThis.fetch.mockResolvedValueOnce({
			json: async () => responseData,
		});
		globalThis.fetch.mockResolvedValueOnce({
			json: async () => responseData,
		});
		const { result } = renderHook(() => useFetch(url));
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(result?.current?.data).toEqual(responseData);
		});
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe(null);

		act(() => {
			//State updates inside act()
			result.current.refetch();
		});

		expect(result.current.loading).toBe(true);
		expect(result.current.data).toBe(null);
		expect(result.current.error).toBe(null);

		await waitFor(() => {
			expect(fetch).toHaveBeenCalledTimes(2);
			expect(result?.current?.data).toEqual(responseData);
		});
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe(null);

		setTimeout(() => {
			expect(screen.getByTestId("post")).toBeInTheDocument();
		}, 5000);
	});
});

describe("Fetching the Data using SWR", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	it("should fetch the data successfully", async () => {
		useSWR.mockReturnValue({
			data: [{ message: "Data fetched successfully" }],
			error: null,
		});
		// const { result } = renderHook(() => useSWR(url, { suspense: true }));
		render(<Strategy2 />);
		await waitFor(() => {
			expect(screen.getByTestId("post")).toBeInTheDocument();
		});
		expect(useSWR).toHaveBeenCalledWith(url, expect.any(Function), {
			suspense: true,
		});
	});
	it("should throw an error", async () => {
		useSWR.mockReturnValue({
			data: null,
			error: new Error("Failed to fetch"),
		});
		expect(() => Strategy2()).toThrowError(Error);
		expect(useSWR).toHaveBeenCalledWith(url, expect.any(Function), {
			suspense: true,
		});
	});
});

describe("Fetching the Data using React Query", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	it("should fetch the data successfully", async () => {
		useQuery.mockReturnValue({
			data: [{ message: "Data fetched successfully" }],
			error: null,
			isLoading: false,
		});
		// const { result } = renderHook(() => useQuery(url, { suspense: true }));
		render(<Strategy4 />);
		await waitFor(() => {
			expect(screen.getByTestId("post")).toBeInTheDocument();
		});
		expect(useQuery).toHaveBeenCalledOnce();
	});
	it("should throw an error", async () => {
		useQuery.mockImplementation(() => {
			throw new Error("Failed to fetch");
		});
		expect(() => Strategy4()).toThrowError(Error);
		expect(useQuery).toThrowError(Error);
	});
});

describe("Error Boundary", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	it("should throw an error", async () => {
		expect(() => Strategy3()).toThrowError(Error);
	});
});
