import { Typography } from "@mui/material";
import logo from "../../defaultData/images/logo.png";

function Logo() {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        style={{
          height: "100px",
          width: "146px",
          display: "inline-block",
          margin: "0 auto",
        }}
      />
      <Typography color="#4d415b" align="center">Welcome to the</Typography>
      <Typography color="#4d415b" align="center" variant="h4">
        <strong>FIDA</strong> IIMS
      </Typography>
    </>
  );
}

export default Logo;
