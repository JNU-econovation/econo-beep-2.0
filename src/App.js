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
import routes from "./routes";
import Home from "./pages/Home";
import SearchAll from "./pages/SearchAll";
import Books from "./pages/Books";
import Device from "./pages/Device";
import Detail from "./pages/Detail";
import Manager from "./pages/Manager";
import MyPage from "./pages/MyPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.searchAll} element={<SearchAll />} />
        <Route path={routes.books} element={<Books />} />
        <Route path={routes.device} element={<Device />} />
        <Route path={`${routes.detail}/:id`} element={<Detail />} />
        <Route path={routes.manager} element={<Manager />} />
        <Route path={routes.myPage} element={<MyPage />} />
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
    letter-spacing: -0.017em;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  button {
    padding: 0;
  }
`;

export default App;
