import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import use100vh from "./hooks/use100vh";
import routes from "@/routes";
import Theme from "@/styles/Theme";
import muiTheme from "@/styles/muiTheme";
import GlobalStyle from "@/styles/GlobalStyle";

import Home from "@/pages/Home";
import SearchAll from "@/pages/SearchAll";
import Books from "@/pages/Books";
import Device from "@/pages/Device";
import Detail from "@/pages/Detail";
import Manager from "@/pages/Manager";
import MyPage from "@/pages/MyPage";

function AppRouter() {
  use100vh();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path="/beep" element={<Home />} />
        <Route path={routes.searchAll} element={<SearchAll />} />
        <Route path={routes.books} element={<Books />} />
        <Route path={routes.device} element={<Device />} />
        <Route path={`${routes.detail}/:id`} element={<Detail />} />
        <Route path={routes.manager} element={<Manager />} />
        <Route path={routes.myPage} element={<MyPage />} />
      </Routes>
    </BrowserRouter>
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

export default App;
