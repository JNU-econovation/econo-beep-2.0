import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Theme from "@/styles/Theme.js";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    --vh: 1vh;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    letter-spacing: -0.017em;
  }

  html, body {
    //font-family: 'Noto Sans KR', sans-serif;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 400;
    font-size: 16px;
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
  }

  button {
    padding: 0;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    color: ${Theme.placeholderColor};
  }
`;

export default GlobalStyle;
