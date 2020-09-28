import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "emotion-theming";
import { preset } from "@rebass/preset";
import newTheme from "./theme";
import Layout from "./containers/Layout";



const GlobalStyle = createGlobalStyle`
  body {
		font-family: ${({ newTheme }) => theme.fonts.body };
  }
`;



const theme = {
  ...preset,
	newTheme,
};
console.log('THEME:', theme);



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