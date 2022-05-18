import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";
import Cards from "../common/Cards";
import { MdSettings } from "react-icons/md";
import { useRequisitionsStats } from "../../hooks/useRequisitions";
import { useTravelOrderStats } from "../../hooks/useTravelOrders";
import { useClientStats } from "../../hooks/useClients";
import { useCasesStats } from "../../hooks/useCaseFiles";
import { useComplaintsStats } from "../../hooks/useComplaint";
import SubHeading from "../common/SubHeading";
import Charts from "../dashboard/DashboardCharts/Charts";
import { useGetTaskStats } from "../../hooks/useTasks";

const Dashboard = () => {
  const { data: requisition } = useRequisitionsStats();
  const { data: travelOrder } = useTravelOrderStats();
  const { data: casesStats } = useCasesStats();
  const { data: clientStats } = useClientStats();
  const { data: complaintsStats } = useComplaintsStats();
  const { data: taskStats } = useGetTaskStats();

  const requisitionNumber = requisition?.numApprovedRequisitions || 0;
  const requisitionPending = requisition?.numPendingRequisitions || 0;
  const travelOrders = travelOrder?.all_TravelOrders || 0;
  const cases = casesStats?.all_cases;
  const clients = clientStats?.all_clinets || 0;
  const complaints = complaintsStats?.all_Complaints || 0;

  return (
    <>
      <SectionHeader title="Dashboard" />
      <SubHeading title="Essentials" />
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
      <SubHeading title="Statistics" />
      <Cards>
        <Card title="Cases" stat={cases} icon={MdSettings} />
        <Card title="Clients" stat={clients} icon={MdSettings} />
        <Card title="Complaints" stat={complaints} icon={MdSettings} />
        <Card title="Legal Officers" stat={5} icon={MdSettings} />
      </Cards>
      <Charts
        casesConcluded={cases}
        casesOnGoing={casesStats?.my_cases}
        todoTasks={taskStats?.todo_tasks}
        completedTasks={taskStats?.completed_tasks}
        pendingTasks={taskStats?.pending_tasks}
      />
    </>
  );
};

export default Dashboard;
