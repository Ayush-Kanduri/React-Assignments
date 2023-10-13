import {
	useCreatePostMutation,
	useDeletePostMutation,
	useGetPostsQuery,
	useUpdatePostMutation,
} from "@/redux/api/api";
import { useEffect, useState } from "react";

const App = ({ text }) => {
	const [CRUD, setCRUD] = useState("");
	const [posts, setPosts] = useState([]);
	const { data, error, isError, isLoading, refetch } = useGetPostsQuery("");
	useEffect(() => {
		setPosts(data);
	}, [data]);
	if (isError) return <Error error={error} />;
	if (isLoading) return <Loading />;
	return (
		<div className="app">
			{CRUD === "" && <Home setCRUD={setCRUD} text={text} />}
			{CRUD === "create" && (
				<Create setCRUD={setCRUD} length={posts?.length} />
			)}
			{CRUD === "read" && (
				<Read setCRUD={setCRUD} refetch={refetch} posts={posts} />
			)}
			{CRUD === "update" && <Update setCRUD={setCRUD} />}
			{CRUD === "delete" && <Delete setCRUD={setCRUD} />}
		</div>
	);
};

export default App;

const styles = {
	form: {
		backgroundColor: "black",
		padding: "50px",
		color: "white",
		borderRadius: "15px",
		marginBottom: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	size: {
		width: "100%",
		borderRadius: "5px",
		padding: "10px",
		outline: "none",
	},
};

const Error = ({ error }) => {
	return (
		<div style={styles.form}>
			<h1>{error.error}</h1>
		</div>
	);
};

const Loading = () => {
	return (
		<div style={{ ...styles.form, background: "white", color: "black" }}>
			<h1>Loading...</h1>
		</div>
	);
};

const Home = ({ setCRUD, text }) => {
	return (
		<div>
			<h1>{text}</h1>
			<h2>CRUD Operations</h2>
			<button onClick={() => setCRUD("create")}>Create</button>
			<button onClick={() => setCRUD("read")}>Read</button>
			<button onClick={() => setCRUD("update")}>Update</button>
			<button onClick={() => setCRUD("delete")}>Delete</button>
		</div>
	);
};

const Create = ({ setCRUD, length }) => {
	const [createPost, { isLoading }] = useCreatePostMutation("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const id = length + 1;
		const userId = Math.floor(Math.random() * 100);
		if (title && body) {
			createPost({ id, userId, title, body });
			setTitle("");
			setBody("");
			alert("Post Created!");
		} else return;
	};
	return (
		<form onSubmit={submitHandler} style={styles.form}>
			{isLoading && <Loading />}
			{!isLoading && (
				<>
					<button onClick={() => setCRUD("")}>GO BACK</button>
					<h1>CREATE POST</h1>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={styles.size}
						required
					/>
					<textarea
						name="body"
						cols="30"
						rows="10"
						placeholder="Body..."
						value={body}
						onChange={(e) => setBody(e.target.value)}
						style={styles.size}
						required
					/>
					<button type="submit" style={styles.size}>
						CREATE
					</button>
				</>
			)}
		</form>
	);
};

const Read = ({ setCRUD, refetch, posts }) => {
	return (
		<div style={styles.form}>
			<button onClick={() => setCRUD("")}>GO BACK</button>
			<button onClick={refetch}>REFETCH</button>
			<h1>READ POSTS</h1>
			{posts?.map((post) => (
				<div key={post.id}>
					<h2>
						{post.id}. {post.title}
					</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

const Update = ({ setCRUD }) => {
	const [updatePost] = useUpdatePostMutation("");
	const [title, setTitle] = useState("");
	const [id, setId] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (title && id) {
			updatePost({ id, title });
			setTitle("");
			setId("");
			alert("Post Updated!");
		} else return;
	};
	return (
		<form onSubmit={submitHandler} style={styles.form}>
			<button onClick={() => setCRUD("")}>GO BACK</button>
			<h1>UPDATE POST</h1>
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				style={styles.size}
				required
			/>
			<input
				name="id"
				placeholder="Post ID"
				value={id}
				onChange={(e) => setId(e.target.value)}
				style={styles.size}
				min={0}
				type="number"
				required
			/>
			<button type="submit" style={styles.size}>
				UPDATE
			</button>
		</form>
	);
};

const Delete = ({ setCRUD }) => {
	const [deletePost] = useDeletePostMutation("");
	const [id, setId] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (id) {
			deletePost(id);
			setId("");
			alert("Post Deleted!");
		} else return;
	};
	return (
		<form onSubmit={submitHandler} style={styles.form}>
			<button onClick={() => setCRUD("")}>GO BACK</button>
			<h1>DELETE POST</h1>
			<input
				name="id"
				placeholder="Post ID"
				value={id}
				onChange={(e) => setId(e.target.value)}
				style={styles.size}
				min={0}
				type="number"
				required
			/>
			<button type="submit" style={styles.size}>
				DELETE
			</button>
		</form>
	);
};
