import { Link } from "react-router-dom";

const Button = ({ text }) => {
	return (
		<Link
			to={`/data/${text}`}
			className="px-3 py-2 font-bold cursor-pointer bg-black border-none text-white rounded-lg text-xl shadow-md hover:shadow-xl transition-all ease-linear"
		>
			{text}
		</Link>
	);
};

export default Button;
