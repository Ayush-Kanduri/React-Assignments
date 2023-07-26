const UIComponents = (props) => {
	const { title } = props;
	return (
		<div className="styles">
			<h1>{title}</h1>
			{title === "material UI" && <MaterialUI title={title} />}
			{title === "tailwind UI" && <TailwindUI title={title} />}
			{title === "shadCN UI" && <ShadCNUI title={title} />}
			{title === "radix UI" && <RadixUI title={title} />}
			{title === "bootstrap UI" && <BootstrapUI title={title} />}
		</div>
	);
};

export default UIComponents;
