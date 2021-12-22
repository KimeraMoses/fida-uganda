import { Box } from "@mui/material";
import { purple } from "@mui/material/colors";

function BackgroundTemplate({ children }) {
  return (
    <Box
      sx={{ backgroundColor: purple[200], minHeight: "100vh", width: "100%" }}
    >
      <Box sx={{ position: "absolute", top: "2rem", right: "2rem" }}>
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundTemplate;
