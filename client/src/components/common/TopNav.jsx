import { useSelector } from "react-redux";
import { Avatar, Stack, Typography } from "@mui/material";

function TopNav() {
  const { firstName } = useSelector((state) => state.auth.user);
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ px: "2rem", py: "0.5rem" }}
    >
      <Typography>
        Hi <span color="purple">{firstName}</span>, Welcome back!
      </Typography>
      <Stack direction="row" alignItems="center" sx={{ marginLeft: "auto" }}>
        <Avatar alt="first name" src="https://unsplash.random/100x100" />
      </Stack>
    </Stack>
  );
}

export default TopNav;
