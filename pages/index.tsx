import type { NextPage } from "next";
import {Text, Skeleton, Heading} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Card from "../components/Card";
import usePosts from "../data/usePost";

const Home: NextPage = () => {
  // const { posts, isLoading } = usePosts();

  return <Layout title="Dashboard">
    <Heading mt={10} mb={5} fontSize="2xl" color="purple.800" fontWeight="thin">Essentials</Heading>
    <Cards>
      <Card />
      <Card />
      <Card />
    </Cards>
    <Heading mt={10} mb={5} fontSize="2xl" color="purple.800" fontWeight="thin">Statistics</Heading>
    <Cards>
      <Card />
      <Card />
      <Card />
    </Cards>
  </Layout>;
};

export default Home;
