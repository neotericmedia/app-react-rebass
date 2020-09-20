import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "emotion-theming";
import { preset } from "@rebass/preset";
import Layout from "./containers/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, sans-serif;
  }
`;

const theme = {
  ...preset,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    // secondary: "#30c",
    secondary: "red",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)",
  },
};
console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
