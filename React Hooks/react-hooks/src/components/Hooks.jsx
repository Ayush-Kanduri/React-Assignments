import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseTransition from "./UseTransition";
import UseCustomHook from "./UseCustomHook";

const Hooks = (props) => {
	const { title } = props;
	return (
		<div className="hook">
			{title === "useState()" && <UseState title={title} />}
			{title === "useEffect()" && <UseEffect title={title} />}
			{title === "useTransition()" && <UseTransition title={title} />}
			{title === "useCustomHook()" && <UseCustomHook title={title} />}
		</div>
	);
};

export default Hooks;
