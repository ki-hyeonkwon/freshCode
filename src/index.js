import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ReactDOM from "react-dom";
import Routes from "./Routes";

// 원래 코드
const GlobalStyle = createGlobalStyle`

  ${reset}
  *{
    box-sizing: border-box ;
    cursor: default;
  }
  body {
    font-family:  DungGuenMo, 'Noto Sans KR', sans-serif;   
  };  
  a {
    text-decoration: none;
    color: #000000
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
