import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import reset from "styled-reset";
import { HelmetProvider } from "react-helmet-async";

import Theme from "./styles/Theme";
import Home from "./pages/Home";
import routes from "./routes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.searchAll} element={<div>search</div>} />
        <Route path={`${routes.type}/:type`} element={<div>type</div>} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <StyledThemeProvider theme={Theme}>
        <MuiThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <AppRouter />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

const muiTheme = createTheme({
  palette: {
    info: {
      light: Theme.black,
      main: Theme.firstGray,
      dark: Theme.black,
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 300,
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    color: ${Theme.placeholderColor};
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }
`;

export default App;
