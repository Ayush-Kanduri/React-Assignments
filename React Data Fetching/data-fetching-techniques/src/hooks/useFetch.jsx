import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const abortController = useRef(new AbortController());
	const refetch = async () => {
		try {
			setLoading(true);
			setData(null);
			setError(null);
			abortController.current?.abort();
			abortController.current = new AbortController();
			const signal = abortController.current?.signal;
			const Res = await fetch(url, { signal });
			const Data = await Res.json();
			setData(Data);
		} catch (err) {
			setError(err);
			setData(null);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		const fetcher = async (...args) => {
			try {
				abortController.current?.abort();
				abortController.current = new AbortController();
				const signal = abortController.current?.signal;
				const Res = await fetch(...args, { signal });
				const Data = await Res.json();
				setData(Data);
			} catch (err) {
				setError(err);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		fetcher(url);
		return () => abortController.current?.abort();
	}, [url]);
	return { data, loading, error, refetch };
};

export default useFetch;
