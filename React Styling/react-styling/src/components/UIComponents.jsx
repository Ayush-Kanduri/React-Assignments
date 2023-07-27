import "./UIComponents.css";
import MaterialUI from "../React UI Components/Material UI/MaterialUI";
import ShadCNUI from "../React UI Components/ShadCN UI/ShadCNUI";
import RadixUI from "../React UI Components/Radix UI/RadixUI";
import BootstrapUI from "../React UI Components/Bootstrap UI/BootstrapUI";

const UIComponents = (props) => {
	const { title } = props;
	return (
		<div className="components">
			<h1 className="heading">{title}</h1>
			{title === "material UI" && <MaterialUI title={title} />}
			{title === "shadCN UI" && <ShadCNUI title={title} />}
			{title === "radix UI" && <RadixUI title={title} />}
			{title === "bootstrap UI" && <BootstrapUI title={title} />}
		</div>
	);
};

export default UIComponents;
