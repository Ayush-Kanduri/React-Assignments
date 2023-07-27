import { Button } from "@/components/ui/button";
import styled from "styled-components";
import ComboboxDemo from "./ComboboxDemo";

const ShadCNUI = () => {
	return (
		<div className="componentsScreen">
			<BUTTON variant="outline">Outline</BUTTON>
			<ComboboxDemo Button={BUTTON} />
		</div>
	);
};

const BUTTON = styled(Button)`
	button {
		all: unset;
	}
	&:hover {
		background-color: #00000072;
		transition: all linear 0.1s;
	}
	border: none;
	outline: none;
`;

export default ShadCNUI;
