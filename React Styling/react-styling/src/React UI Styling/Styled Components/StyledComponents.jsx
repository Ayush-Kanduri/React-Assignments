import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Normal CSS ✔️
// CSS Variables ✔️
// Media Queries ✔️
// Pseudo Classes ✔️
// CSS Nesting ✔️

const StyledComponents = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className="styleScreen">
			<Heading>Change this heading</Heading>
			<Button primary="true">Change this button</Button>
			<StyledLink to="/">Change this external component</StyledLink>
			<AnchorLink onClick={(e) => e.preventDefault()}>
				Change this link
			</AnchorLink>
			<Box onClick={() => setDisabled((prev) => !prev)} disabled={disabled}>
				<div>{disabled ? "Disabled" : "Change this box"}</div>
			</Box>
		</div>
	);
};

const color1 = "black";

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.color3};
	text-shadow: none;
	&:hover {
		color: var(--color-scheme7);
		transition: all linear 0.1s;
		cursor: pointer;
		scale: 1.2;
	}
	text-decoration: none;
	font-size: 1.3rem;
`;

const AnchorLink = styled.a`
	color: ${({ theme }) => theme.colors.color3};
	text-shadow: none;
	&:hover {
		color: var(--color-scheme7);
		transition: all linear 0.1s;
		cursor: pointer;
		scale: 1.2;
	}
	text-decoration: none;
	font-size: 1.1rem;
`;

const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.color3};
	text-shadow: none;
	&:hover {
		color: var(--color-scheme7);
		transition: all linear 0.1s;
		cursor: pointer;
		scale: 1.2;
	}
	${({ theme }) =>
		theme &&
		css`
			@media (${theme.responsive.mobile} <= width <= ${theme.responsive
					.tablet}) or (450px <= height <= 500px) {
				color: ${theme.colors.color2};
			}
		`}
`;

const Button = styled.button`
	background-color: ${({ theme, primary }) =>
		primary ? theme.colors.color3 : null};
	border-radius: 10px;
	color: ${color1};
	border: none;
	padding: 10px 15px;
	font-size: 1rem;
	font-weight: 700;
	transition: none;
	&:hover {
		background-color: var(--color-scheme7);
		transition: all linear 0.1s;
		cursor: pointer;
		scale: 1.2;
	}
`;

const Box = styled.div`
	position: relative;
	width: 150px;
	height: 120px;
	border-radius: 10px;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
	font-size: 1rem;
	font-weight: 800;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	color: ${color1};
	div {
		position: absolute;
		top: "50%";
		left: "50%";
		width: 120px;
		height: 70px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	${({ disabled }) =>
		disabled &&
		css`
			transition: all linear 0.1s;
			cursor: pointer;
			background-color: gray;
			scale: 1;
			&:hover {
				background-color: gray;
				scale: 1;
			}
		`}
	${({ disabled }) =>
		!disabled &&
		css`
			transition: all linear 0.1s;
			cursor: pointer;
			background-color: ${({ theme }) => theme.colors.color3};
			div {
				background-color: var(--color-scheme7);
			}
			&:hover {
				background-color: var(--color-scheme7);
				scale: 1.2;
				div {
					background-color: ${({ theme }) => theme.colors.color3};
				}
			}
		`}
`;

export default StyledComponents;
