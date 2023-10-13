import { describe, it, expect, vi, afterEach, test } from "vitest";
import { render, screen, act, waitFor, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetch from "@/hooks/useFetch";
import useSWR from "swr";
import { useQuery } from "react-query";
import Strategy2 from "@/pages/Strategy2";
import Strategy3 from "@/pages/Strategy3";
import Strategy4 from "@/pages/Strategy4";
import Loader from "@/components/Loader";
import fetcher from "@/utils/Fetcher";
import fetchData from "@/utils/Axios";
import Strategy5 from "@/pages/Strategy5";
import { useGetPostsQuery } from "@/redux/api/api";

const responseData = { message: "Data fetched successfully" };
const error = new Error("Failed to fetch");
let url = "https://jsonplaceholder.typicode.com/posts";
vi.mock("swr");
vi.mock("react-query");
vi.mock("@/redux/api/api", async () => {
	const actual = await vi.importActual("@/redux/api/api");
	return {
		...actual,
		useGetPostsQuery: vi.fn(),
	};
});

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

	it("should render the component with loading state", async () => {
		globalThis.fetch = vi.fn();
		globalThis.fetch.mockResolvedValueOnce({
			json: async () => null,
		});
		const { result } = renderHook(() => useFetch(url));
		expect(result.current.loading).toBe(true);
		expect(result.current.data).toBe(null);
		expect(result.current.error).toBe(null);
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

	it("should throw an error on refetch", async () => {
		globalThis.fetch = vi.fn();
		globalThis.fetch.mockResolvedValueOnce({
			json: async () => responseData,
		});
		globalThis.fetch.mockRejectedValueOnce(error);

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
			expect(result?.current?.error).toEqual(error);
		});
		expect(result.current.loading).toBe(false);
		expect(result.current.data).toBe(null);

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
	it("should render the component with loading state", async () => {
		useSWR.mockReturnValue({
			data: null,
			error: null,
			isLoading: true,
		});
		// const { result } = renderHook(() => useSWR(url, { suspense: true }));
		render(<Strategy2 />);
		await waitFor(() => {
			expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
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
		useQuery.mockImplementation((key, predicate) => {
			expect(key).toBe("posts");
			expect(predicate).toBeInstanceOf(Function);
			return {
				data: [{ message: "Data fetched successfully" }],
				error: null,
				isLoading: false,
			};
		});
		render(<Strategy4 />);
		await waitFor(() => {
			expect(screen.getByTestId("post")).toBeInTheDocument();
		});
		expect(useQuery).toHaveBeenCalledWith("posts", expect.any(Function));
	});
	it("should render the component with loading state", async () => {
		useQuery.mockImplementation((key, predicate) => {
			expect(key).toBe("posts");
			expect(predicate).toBeInstanceOf(Function);
			return {
				data: null,
				error: null,
				isLoading: true,
			};
		});
		render(<Strategy4 />);
		await waitFor(() => {
			expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
		});
		expect(useQuery).toHaveBeenCalledWith("posts", expect.any(Function));
	});
	it("should throw an error", async () => {
		useQuery.mockReturnValue({
			data: null,
			error: new Error("Failed to fetch"),
			isLoading: false,
		});
		expect(() => Strategy4()).toThrowError(Error);
		expect(useQuery).toHaveBeenCalledWith("posts", expect.any(Function));
	});
});

describe("Fetching the Data using React Toolkit Query", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	it("should fetch the data successfully", async () => {
		const responseData = [
			{ id: 1, title: "Title 1", body: "Body 1" },
			{ id: 2, title: "Title 2", body: "Body 2" },
			{ id: 3, title: "Title 3", body: "Body 3" },
		];
		useGetPostsQuery.mockReturnValue({
			data: responseData,
			isLoading: false,
			isError: false,
			isSuccess: true,
			isFetching: false,
			error: null,
		});
		render(<Strategy5 />);
		await waitFor(() => {
			expect(screen.getAllByTestId("post").length).toBeGreaterThan(0);
		});
		expect(useGetPostsQuery).toHaveBeenCalled();
	});
	it("should render the component with loading state", async () => {
		useGetPostsQuery.mockReturnValue({
			data: null,
			isLoading: true,
			isError: false,
			isSuccess: false,
			isFetching: false,
			error: null,
		});
		render(<Strategy5 />);
		await waitFor(() => {
			expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
		});
	});
	it("should throw an error if there is an error", async () => {
		const errorSpy = vi.spyOn(console, "error");
		errorSpy.mockImplementation(() => {});
		useGetPostsQuery.mockReturnValue({
			data: null,
			isLoading: false,
			isError: true,
			isSuccess: false,
			isFetching: false,
			error: error,
		});
		expect(() => render(<Strategy5 />)).toThrowError(error);
		errorSpy.mockRestore();
	});
});

describe("Error Boundary", () => {
	it("should throw an error", () => {
		const errorSpy = vi.spyOn(console, "error");
		errorSpy.mockImplementation(() => {});
		const expectedError = new Error(
			"This is a custom error handled by ErrorBoundary!"
		);
		expect(() => {
			render(<Strategy3 />);
		}).toThrowError(expectedError);
		errorSpy.mockRestore();
	});
});

describe("should render the loading screen", () => {
	it("should render the loading screen", () => {
		render(<Loader />);
		expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
	});
});

test("fetcher should return data from a JSON response", async () => {
	const mockResponseData = { message: "Data fetched successfully" };
	const mockFetch = vi.fn().mockResolvedValue({
		json: vi.fn().mockResolvedValue(mockResponseData),
	});
	globalThis.fetch = mockFetch;

	const url = "https://jsonplaceholder.typicode.com/posts";
	const response = await fetcher(url);

	expect(response).toEqual(mockResponseData);
	expect(mockFetch).toHaveBeenCalledWith(url);

	globalThis.fetch.mockRestore();
});

describe("axios should return data from a JSON response", () => {
	it("should fetch data successfully", async () => {
		const data = await fetchData();
		expect(data.length).toBeGreaterThan(0);
	});
	it("should throw an error", async () => {
		await expect(fetchData("/invalid-url")).rejects.toThrow();
	});
});
