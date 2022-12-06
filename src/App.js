import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./AppStyle";
import { GlobalStorage } from "./GlobalContext";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStorage>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Main />
          <Footer />
        </div>
      </GlobalStorage>
    </ThemeProvider>
  );
};

export default App;
