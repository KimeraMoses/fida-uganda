import type { NextPage } from "next";
import AppHeader from "../components/AppHeader";
import MainMenu from "../components/MainMenu";

const Home: NextPage = () => {
  return (
    <>
      <AppHeader />
      <MainMenu />
    </>
  );
};

export default Home;
