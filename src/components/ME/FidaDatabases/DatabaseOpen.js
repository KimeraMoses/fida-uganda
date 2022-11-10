import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLeaveRequests } from "../../../hooks/useLeaveRequest";
import { useProjects } from "../../../hooks/useProjects";
import TrackerTable from "../../dashboard/TrackerTable/TrackerTable";
import ReportBreadCrumb from "../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
import Loader from "./../../common/UI/Loader/Loader";
import { useAdvances } from "./../../../hooks/useAdvances";
import FolderFilesTable from "../../HumanResource/Reports/ReportTable/FolderFilesTable";
import { FolderFileData } from "./../../HumanResource/Reports/Reports";
import ITServicesTable from "../../itDepartment/Services/ITServicesTable";
import { useItServices } from "../../../hooks/useItServices";
import { useTasks } from "../../../hooks/useTasks";
import AllTasks from "../../Tasks/AllTasks/AllTasks";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import RequisitionTable from "./../../dashboard/Requisitions/RequisitionsTable";
import { useRequisitions } from "../../../hooks/useRequisitions";
import { useEvents } from "../../../hooks/useEvents";
import AttendenceTable from "./../../dashboard/EventsAttendence/AttendenceTable/AttendenceTable";
import AllocationsTable from "../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { useNotifications } from "../../../hooks/useNotification";
import { useAllocations } from "../../../hooks/useAllocations";
import NotificationsTable from "../../Membership/Notifications/NotificationsTable/NotificationTable";
import MemberTable from "../../Membership/Members/MemberTable/MemberTable";
import { useMembers } from "../../../hooks/useMember";
import { useAssets } from "../../../hooks/useAsset";
import ProjectTable from "../../LegalAid/ProjectFiles/ProjectFilesTable/ProjectTable";
import Table from "../../common/TableComponent/Table";
import { caseColumns, clientsTableColumns, CLVTableColumns, fidaAssetsColumns, fidaProjectsTableColumns, fleetDatabaseColumns, itComplaintsColumns, itProductsColumns, leaveRequestsTableColumns, travelOrdersTableColumns } from "../../../lib/tableColumns";
import { useCasesData, useClientsData, useCLVData, useFleetData, useITComplaintsData, useItData, useTravleOrdersdata } from "../../../hooks/tableDataHooks/useTableData";


const DatabaseOpen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { dbName } = useParams();
  // const { data, isLoading } = useClvCases();
  const {data, isLoading} = useCLVData()
  const {data: complaintsData, isLoading: complaintsLoading} = useITComplaintsData()
  const {data: casesData, isLoading: casesLoading} = useCasesData()
  const {data: clientsData, isLoading: clientsLoading} = useClientsData()
  const {data: itProductData, isLoading: itProductsLoading} = useItData()
  const {approvedDopData: travelData, isLoading: travelOrdersDataLoading} = useTravleOrdersdata()
  const {data:fleetsData, isLoading:fleetLoading} = useFleetData()
  // const clientsData = useClients();
  const projectsData = useProjects();
  const leaveData = useLeaveRequests();
  const advanceData = useAdvances();
  // const caseData = useCaseFiles();
  // const itProductData = useItProducts();
  const itServicesData = useItServices();
  // const itComplaintsData = useComplaints();
  const requisitionsData = useRequisitions();
  const tasksData = useTasks();
  const eventsData = useEvents();
  // const travelData = useTravelOrders();
  const allocationsData = useAllocations();
  const notificationsData = useNotifications();
  const membersData = useMembers();
  const assetsData = useAssets();
  // const fleetsData = useFleets();
  return (
    <>
      <ReportBreadCrumb
        root="Fida Database"
        rootLink="/fida-databases"
        folderName={dbName.replace(/-/g, " ")}
      />
      {isLoading |
      clientsLoading |
      projectsData.isLoading |
      advanceData.isLoading |
      leaveData.isLoading |
      itProductsLoading|
      itServicesData.isLoading |
      requisitionsData.isLoading |
      notificationsData.isLoading |
      allocationsData.isLoading |
      membersData.isLoading |
      complaintsLoading |
      travelOrdersDataLoading |
      assetsData.isLoading |
      eventsData.isLoading |
      tasksData.isLoading |
      fleetLoading |
      tasksData.isLoading |
      casesLoading ? (
        <Loader />
      ) : dbName === "clvs" && data? (
        <Table
          columns={CLVTableColumns}
          showBtn={false}
          data={data?data:null}
          hideActions
          tableName="CLV"
        />
      ) : dbName === "clients" && clientsData? (
        // <ClientsTable
        //   showBtn={false}
        //   data={clientsData.data ? clientsData.data.clients : null}
        //   btnLabel="Add Client"
        //   tableName="Clients"
        // />

        <Table
        hideActions
        data={clientsData? clientsData: null}
        columns={clientsTableColumns}
        showBtn={false}
      />
      ) : dbName === "projects" && projectsData.data?.projects ? (
        // <FidaProjectTable
        //   showBtn={false}
        //   data={projectsData.data ? projectsData.data.projects : null}
        //   tableName="Fida Projects"
        // />
        <Table
        hideActions
        data={projectsData.data ? projectsData.data.projects : null}
        columns={fidaProjectsTableColumns}
        showBtn={false}
      />
      ) : dbName === "cases" && casesData? (
        <Table
          columns={caseColumns}
          showBtn={false}
          data={casesData?casesData:null}
          tableName="Case Files"
          hideActions
        />
      ) : dbName === "leavetrackers" && leaveData.data.leaves ? (
        // <TrackerTable
        //   type="leave"
        //   showBtn={false}
        //   data={leaveData.data ? leaveData.data.leaves : null}
        //   tableName="Leave Tracker"
        // />
        <Table
        columns={leaveRequestsTableColumns}
        showBtn={false}
        data={leaveData.data ? leaveData.data.leaves : null}
        tableName="Leave Tracker"
        hideActions
      />

      ) : dbName === "advances" && advanceData.data.advances ? (
        <TrackerTable
          type="advance"
          showBtn={false}
          data={advanceData.data ? advanceData.data.advances : null}
          tableName="Advance Tracker"
        />
      ) : dbName === "reports" ? (
        <FolderFilesTable
          showBtn={false}
          data={FolderFileData}
          tableName="Reports"
        />
      ) : dbName === "itproducts" && itProductData? (
        // <ITProductsTable
        //   showBtn={false}
        //   data={itProductData.data ? itProductData.data.ITProducts : null}
        //   tableName="IT Products"
        // />

        <Table
        hideActions
        data={itProductData? itProductData: null}
        columns={itProductsColumns}
        tableName="IT Products"
        showBtn={false}
      />
      ) : dbName === "services" && itServicesData.data?.services ? (
        <ITServicesTable
          showBtn={false}
          data={itServicesData.data ? itServicesData.data.services : null}
          tableName="IT Services"
        />
      ) : dbName === "complaints" && complaintsData? (
        // <ComplaintsTable
        //   showBtn={false}
        //   data={itComplaintsData.data ? itComplaintsData.data.complaints : null}
        //   tableName="IT Complaints"
        // />

        <Table
        data={complaintsData ? complaintsData : null}
        tableName="IT Complaints"
        columns={itComplaintsColumns}
        hideActions
      />

      ) : dbName === "requisitions" && requisitionsData.data?.Requisitions ? (
        <RequisitionTable
          showBtn={false}
          data={
            requisitionsData.data ? requisitionsData.data.Requisitions : null
          }
          tableName="Requisitions"
        />
      ) : dbName === "tasks" && tasksData.data?.tasks ? (
        <AllTasks tasks={tasksData.data ? tasksData.data.tasks : null} />
      ) : dbName === "events" && eventsData.data?.events ? (
        <AttendenceTable
          showBtn={false}
          data={eventsData.data ? eventsData.data.events : null}
          tableName="Events"
        />
      ) : dbName === "travelorders" && travelData ? (
        // <TravelOrderTable
        //   showBtn={false}
        //   data={travelData.data ? travelData.data.travelOrders : null}
        //   tableName="Travel Order"
        // />

        <Table
        data={travelData? travelData : null}
        tableName="Travel Order"
        columns={travelOrdersTableColumns}
        hideActions
      />
      ) : dbName === "allocations" && allocationsData.data?.Allocations ? (
        <AllocationsTable
          showBtn={false}
          data={allocationsData.data ? allocationsData.data.Allocations : null}
          tableName="Allocations"
        />
      ) : dbName === "notifications" &&
        notificationsData.data?.Notifications ? (
        <NotificationsTable
          showBtn={false}
          data={
            notificationsData.data ? notificationsData.data.Notifications : null
          }
          tableName="Notifications"
        />
      ) : dbName === "members" && membersData.data?.Members ? (
        <MemberTable
          showBtn={false}
          data={membersData.data ? membersData.data.Members : null}
          tableName="Members"
        />
      ) : dbName === "assets" && assetsData.data?.assets ? (
        // <FidaAssetsTable
        //   showBtn={false}
        //   data={assetsData.data ? assetsData.data.assets : null}
        //   tableName="Fida Assets"
        // />

        <Table
        data={assetsData.data ? assetsData.data.assets : null}
        tableName="Fida Assets"
        columns={fidaAssetsColumns}
        hideActions
      />
      ) : dbName === "projectfiles" ? (
        <ProjectTable
          showBtn={false}
          // data={assetsData.data ? assetsData.data.assets : null}
        />
      ) : dbName === "fleets" && fleetsData ? (
        // <FleetDatabaseTable
        //   showBtn={false}
        //   data={fleetsData.data ? fleetsData.data.fleets : null}
        //   tableName="Fleet Database"
        // />

        <Table
        data={fleetsData ? fleetsData : null}
        tableName="Fleet Database"
        columns={fleetDatabaseColumns}
        hideActions
      />
      ) : (
        <Box bgColor="purple.100" padding={20} textAlign="center">
          <Heading color="purple.400" textTransform="capitalize">
            {dbName} Table Under Design!
          </Heading>
        </Box>
      )}
    </>
  );
};

export default DatabaseOpen;
