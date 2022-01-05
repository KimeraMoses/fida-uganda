import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#562b85",
    },
    secondary: {
      main: purple[400],
    },
  },
});

export default theme;
