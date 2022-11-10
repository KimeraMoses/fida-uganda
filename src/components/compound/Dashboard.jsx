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
import { useSelector} from "react-redux";
import { useLeavesStats} from "../../hooks/useLeaveRequest";
import { useAdvanceStats} from "../../hooks/useAdvances";
import { useEventsStats} from "../../hooks/useEvents";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: requisition } = useRequisitionsStats();
  const { data: travelOrder } = useTravelOrderStats();
  const { data: leaveRequest} = useLeavesStats();
  const { data: advanceRequest} = useAdvanceStats();
  const { data: events} = useEventsStats();
  const { data: casesStats } = useCasesStats();
  const { data: clientStats } = useClientStats();
  const { data: complaintsStats } = useComplaintsStats();
  const { data: taskStats } = useGetTaskStats();

  const myRequisitions = requisition?.my_Requisitions || 0;
  const allRequisitions = requisition?.all_Requisitions || 0;
  const travelOrders = travelOrder?.all_TravelOrders || 0;
  const myTravelOrders = travelOrder?.my_TravelOrders || 0;
  const allLeaves = leaveRequest?.all_Leaves || 0;
  const myLeaves = leaveRequest?.my_Leaves || 0;
  const allAdvances = advanceRequest?.all_Advances || 0;
  const myAdvances = advanceRequest?.my_Advances || 0;
  const allEvents = events?.all_Event || 0;
  const myEvents = events?.my_Event || 0;

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
          stat={(user.designation === "dop" ||
              user.designation === "accountant" ||
              user.designation === "fleetManager") ? travelOrders : myTravelOrders}
          icon={MdSettings}
        />
        <Card
          to="requisitions"
          title="Requisitions"
          stat={(user.designation === "dop" ||
              user.designation === "accountant" ||
              user.designation === "ceo" ||
              user.designation === "procurement") ? allRequisitions : myRequisitions}
          icon={MdSettings}
        />
        <Card
          to="leave-advance-tracker"
          title="Leave and Advance Tracker"
          stat={(user.designation === "dop" ||
              user.designation === "humanResources" ||
              user.designation === "ceo" ||
              user.designation === "finance" ||
              user.designation === "accountant") ? allLeaves + allAdvances : myLeaves + myAdvances}
          icon={MdSettings}
        />
        <Card
          to="events-attendance"
          title="Events Attendance"
          stat={(user.designation === "dop" ||
              user.designation === "accountant" ||
              user.designation === "ceo" ||
              user.designation === "humanResources" ||
              user.designation === "finance" ||
              user.designation === "fleetManager" ||
              user.designation === "procurement") ? allEvents : myEvents}
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
