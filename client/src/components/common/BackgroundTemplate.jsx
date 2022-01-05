import { Box } from "@mui/material";
import defaultImage from "../../defaultData/images/2.jpeg";

function BackgroundTemplate({ image = defaultImage, children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: "2rem", right: "2rem" }}>
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundTemplate;
