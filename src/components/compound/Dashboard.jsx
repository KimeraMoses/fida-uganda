import { Heading } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";
import Cards from "../common/Cards";
import { MdSettings } from "react-icons/md";
import { useRequisitionsStats } from "../../hooks/useRequisitions";
import { useTravelOrderStats } from "../../hooks/useTravelOrders";

const Dashboard = () => {
  const { data: requisition } = useRequisitionsStats();
  const { data: travelOrder } = useTravelOrderStats();

  const requisitionNumber = requisition?.numApprovedRequisitions || 0;
  const requisitionPending = requisition?.numPendingRequisitions || 0;
  const travelOrders = travelOrder?.all_TravelOrders || 0;

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
        <Card
          to="travel-order"
          title="Travel Order"
          stat={travelOrders}
          icon={MdSettings}
        />
        <Card
          to="requisitions"
          title="Requisitions"
          stat={requisitionNumber + requisitionPending}
          icon={MdSettings}
        />
        <Card
          to="leave-advance-tracker"
          title="Leave and Advance Tracker"
          stat={5}
          icon={MdSettings}
        />
        <Card
          to="events-attendance"
          title="Events Attendance"
          stat={5}
          icon={MdSettings}
        />
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
        <Card to="" title="Cases" stat={5} icon={MdSettings} />
        <Card to="" title="Clients" stat={5} icon={MdSettings} />
        <Card to="" title="Complaints" stat={5} icon={MdSettings} />
        <Card to="" title="Legal Officers" stat={5} icon={MdSettings} />
      </Cards>
    </>
  );
};

export default Dashboard;
