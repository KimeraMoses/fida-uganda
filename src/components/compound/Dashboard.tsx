import { Heading } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";
import Cards from "../common/Cards";
import { MdSettings } from "react-icons/md";
import { useRequisitionsStats } from "../../hooks/useRequisitions";

const Dashboard = () => {
  const { data } = useRequisitionsStats();

  const requisitionNumber = data ? data?.numApprovedRequisitions : 0;
  const requisitionPending = data ? data?.numPendingRequisitions : 0;

  return (
    <>
      <SectionHeader title="Dashboard" />
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
          stat={requisitionNumber + requisitionPending}
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
    </>
  );
};

export default Dashboard;
