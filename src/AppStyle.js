import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
 }

 html, body {
  overflow-x: hidden;
 }

 h1, h2, h3, p {
  margin: 0px;
 }

 img {
  display: block;
  max-width: 100%;
 }


.App {
  min-height: calc(100vh + 5rem);
}
`;

export const theme = {
  colors: {
    blueFirst: "hsl(197, 64%, 38%)",
    blueSecond: "hsl(205, 100%, 61%)",
    blueThird: "hsl(205, 100%, 86%)",
    greenFirst: "hsl(154, 84%, 37%)",
    yellowFirst: "hsl(42, 75%, 56%)",
    redFirst: "hsl(360, 53%, 51%)",
    neutralFirst: "hsl(0, 0%, 100%)",
    neutralSecond: "hsl(210, 11%, 64%)",
    neutralThird: "hsl(210, 21%, 30%)",
    neutralFourth: "hsl(218, 4%, 40%)",
    neutralFifth: "hsl(210, 33%, 96%)",
  },
};
