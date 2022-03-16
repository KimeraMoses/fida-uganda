import type { NextPage } from "next";
import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Card from "../components/Card";
import { MdSettings } from "react-icons/md";

const Home: NextPage = () => {

  return (
    <Layout title="Dashboard">
      <Heading
        mt={10}
        mb={5}
        fontSize="2xl"
        color="purple.800"
        fontWeight="thin"
      >
        Essentials
      </Heading>
      <Cards>
        <Card to="" title="User logs" stat={5} icon={MdSettings} />
        <Card
          to="requisitions"
          title="Requisitions"
          stat={10}
          icon={MdSettings}
        />
        <Card to="" title="User logs" stat={5} icon={MdSettings} />
      </Cards>
      <Heading
        mt={10}
        mb={5}
        fontSize="2xl"
        color="purple.800"
        fontWeight="thin"
      >
        Statistics
      </Heading>
      <Cards>
        <Card to="" title="User logs" stat={5} icon={MdSettings} />
        <Card to="" title="User logs" stat={5} icon={MdSettings} />
        <Card to="" title="User logs" stat={5} icon={MdSettings} />
      </Cards>
    </Layout>
  );
};

export default Home;
