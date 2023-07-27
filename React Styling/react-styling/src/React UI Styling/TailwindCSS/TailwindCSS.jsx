import { useState } from "react";
// import "../../tailwind.css";

// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ✔️
// Pseudo Classes ✔️
// CSS Nesting ❌

const TailwindCSS = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className="styleScreen">
			<h1 className="text-purple-400 hover:text-orange-400 hover:cursor-pointer shadow-none sm:text-red-500 md:text-purple-400 hover:scale-110 transition-all">
				Change this heading
			</h1>
			<button className="border-0 rounded-xl px-7 py-4 hover:bg-orange-400 hover:text-black transition-all hover:scale-110 font-extrabold bg-purple-400 text-black hover:font-extrabold">
				Change this button
			</button>
			<a
				className="no-underline text-purple-400 text-xl font-semibold hover:text-orange-400 transition-all hover:scale-125 cursor-pointer"
				onClick={(e) => e.preventDefault()}
			>
				Change this link
			</a>
			<div
				className={`w-44 h-36 border-0 rounded-xl flex justify-center items-center shadow-2xl shadow-slate-950 text-lg bg-purple-400 text-black font-extrabold p-10 transition-all cursor-pointer hover:bg-orange-500 ${
					disabled
						? "bg-slate-500 hover:bg-slate-500"
						: "hover:scale-110 scale-100"
				}`}
				onClick={() => setDisabled((prev) => !prev)}
			>
				{disabled ? "Disabled" : "Change this box"}
			</div>
		</div>
	);
};

export default TailwindCSS;
