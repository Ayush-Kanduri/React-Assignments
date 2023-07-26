import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
#root {
	text-align: center;
	flex: 1;
}
body {
	display: flex;
	flex-direction: column;
}
h1 {
	font-size: 3.2em;
	font-weight: 600;
	line-height: 1.1;
}
a{
    text-decoration: none;  
}
`;
