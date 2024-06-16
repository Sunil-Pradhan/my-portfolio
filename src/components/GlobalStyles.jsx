import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

// Import the Rubik font from Google Fonts
const rubikFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
`;

const GlobalStyles = createGlobalStyle`
  ${rubikFont}

	:root {
		font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-display: swap;
		-webkit-font-smoothing: antialiased;
		font-size: 62.5%;
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	}

 /* ===== Fadein Effect ====== */
	body {
		animation: fadeInAnimation ease 3s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

/* ===== Scrollbar CSS ====== */
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
  }

::-webkit-scrollbar-thumb {
	background-color: #cccccc;
	background-clip: padding-box;
	border: 2px solid transparent;
	border-radius: 6px;
 }

::-webkit-scrollbar-thumb:hover {
	background-color: #ababab;
}

::-webkit-scrollbar-thumb:active {
	background-color: #ababab;
}

`;

export default GlobalStyles;
