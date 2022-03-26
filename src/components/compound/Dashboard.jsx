import { Heading } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";
import Cards from "../common/Cards";
import { MdSettings } from "react-icons/md";
import { useRequisitionsStats } from "../../hooks/useRequisitions";
import { useTravelOrderStats } from "../../hooks/useTravelOrders";
import { useClientStats } from "../../hooks/useClients";
import { useCasesStats } from "../../hooks/useCaseFiles";
import { useComplaintsStats } from "../../hooks/useComplaint";

const Dashboard = () => {
  const { data: requisition } = useRequisitionsStats();
  const { data: travelOrder } = useTravelOrderStats();
  const { data: casesStats } = useCasesStats();
  const { data: clientStats } = useClientStats();
  const { data: complaintsStats } = useComplaintsStats();

  const requisitionNumber = requisition?.numApprovedRequisitions || 0;
  const requisitionPending = requisition?.numPendingRequisitions || 0;
  const travelOrders = travelOrder?.all_TravelOrders || 0;
  const cases = casesStats?.all_cases || 0;
  const clients = clientStats?.all_clinets || 0;
  const complaints = complaintsStats?.all_Complaints || 0;

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
        <Card to="" title="Cases" stat={cases} icon={MdSettings} />
        <Card
          to=""
          title="Clients"
          stat={clients}
          icon={MdSettings}
        />
        <Card to="" title="Complaints" stat={complaints} icon={MdSettings} />
        <Card to="" title="Legal Officers" stat={5} icon={MdSettings} />
      </Cards>
    </>
  );
};

export default Dashboard;
