import { createTheme } from "@mui/material/styles";
import Theme from "@/styles/Theme.js";

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

export default muiTheme;
