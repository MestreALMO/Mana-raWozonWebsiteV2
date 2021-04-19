import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--white: #fff;
		--dark-white: #F9F9F9;

		--light-gray: #777;
		--gray: #555;
		--dark-gray: #333;

		--black: #000;

		--light-red: #c54949;
		--red: #FF0000;
		--dark-red: #b71c1c;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%
		}

		@media (max-width: 720px) {
			font-size: 87.5%
		}
	}

	body {
		background: var(--white);
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export default GlobalStyle;
