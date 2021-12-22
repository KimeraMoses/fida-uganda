import SideBar from "../common/SideBar";
import { Stack } from "@mui/material";
import Main from "../common/Main";

function Home() {
  return (
    <Stack direction="row">
      <SideBar />
      <Main />
    </Stack>
  );
}

export default Home;
