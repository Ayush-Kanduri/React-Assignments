import { lazy } from "react";

const LazyLoading = (path, namedExport = null) => {
	return lazy(() => {
		const promise = import(/* @vite-ignore */ path);
		if (namedExport === null) return promise;
		else return promise.then((module) => ({ default: module[namedExport] }));
	});
};

export default LazyLoading;
