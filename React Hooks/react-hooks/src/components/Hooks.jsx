import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseTransition from "./UseTransition";

const Hooks = (props) => {
	return (
		<div className="hook">
			{props.title === "useState()" && <UseState title={props.title} />}
			{props.title === "useEffect()" && <UseEffect title={props.title} />}
			{props.title === "useTransition()" && (
				<UseTransition title={props.title} />
			)}
		</div>
	);
};

export default Hooks;
