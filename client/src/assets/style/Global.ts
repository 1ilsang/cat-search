import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
		height: 100%;
	}
	body {
		height: 100%;
		padding: 0;
		margin: 0;
	}
	#root {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
`;
