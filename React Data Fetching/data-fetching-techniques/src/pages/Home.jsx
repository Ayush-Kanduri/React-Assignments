import Button from "@/components/Button";

const Home = () => {
	const buttons = [
		"useEffect()",
		`use()`,
		"SWR",
		"React Query",
		"React RTK Query",
		"Custom Error Boundary",
	];
	return (
		<div className="flex flex-col justify-center items-center w-full h-full space-y-10 p-3">
			<h1 className="font-extrabold text-center text-4xl text-black">
				Data Fetching Techniques
			</h1>
			<div className="flex justify-center items-center flex-wrap w-full gap-5">
				{buttons.map((button, index) => (
					<Button key={index} text={button} />
				))}
			</div>
		</div>
	);
};

export default Home;
