import "./Styles.css";
import InlineStyling from "../React UI Styling/Inline Styling/InlineStyling";
import CSS from "../React UI Styling/CSS/CSS";
import CSSModules from "../React UI Styling/CSS Modules/CSSModules";
import SCSS from "../React UI Styling/SCSS/SCSS";
import TailwindCSS from "../React UI Styling/TailwindCSS/TailwindCSS";
import StyledComponents from "../React UI Styling/Styled Components/StyledComponents";

const Styles = (props) => {
	const { title } = props;
	return (
		<div className="styles">
			<h1 className="heading">{title}</h1>
			{title === "CSS" && <CSS title={title} />}
			{title === "CSS modules" && <CSSModules title={title} />}
			{title === "inline styling" && <InlineStyling title={title} />}
			{title === "SCSS" && <SCSS title={title} />}
			{title === "tailwind CSS" && <TailwindCSS title={title} />}
			{title === "styled components" && <StyledComponents title={title} />}
		</div>
	);
};

export default Styles;
