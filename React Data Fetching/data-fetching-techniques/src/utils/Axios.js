import axios from "axios";

const instance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });

const fetchData = async (url) => {
	const response = await instance.get(url);
	return response.data;
};

export default fetchData;
