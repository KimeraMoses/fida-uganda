import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useClients } from "../../../hooks/useClients";
import { useClvs } from "../../../hooks/useClv";
import { useLeaveRequests } from "../../../hooks/useLeaveRequest";
import { useProjects } from "../../../hooks/useProjects";
import TrackerTable from "../../dashboard/TrackerTable/TrackerTable";
import ReportBreadCrumb from "../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
import ClientsTable from "../../LegalAid/Clients/ClientsTable/ClientsTable";
import ClvTable from "../../LegalAid/CLVs/CLVTable/ClvTable";
import FidaProjectTable from "../FidaProjects/FidaProjectTable/FidaProjectTable";
import Loader from "./../../common/UI/Loader/Loader";
import { useAdvances } from "./../../../hooks/useAdvances";
import FolderFilesTable from "../../HumanResource/Reports/ReportTable/FolderFilesTable";
import { FolderFileData } from "./../../HumanResource/Reports/Reports";
import CaseFilesTable from "../../LegalAid/ClvCaseFiles/CaseFilesTable/CaseFilesTable";
import { useCaseFiles } from "../../../hooks/useCaseFiles";
import { useItProducts } from "../../../hooks/useItProduct";
import ITProductsTable from "../../itDepartment/Products/ITProductsTable";
import ITServicesTable from "../../itDepartment/Services/ITServicesTable";
import { useItServices } from "../../../hooks/useItServices";
import { useTasks } from "../../../hooks/useTasks";
import AllTasks from "../../Tasks/AllTasks/AllTasks";
import { useComplaints } from "../../../hooks/useComplaint";
import ComplaintsTable from "../../itDepartment/Complaints/ComplaintTable/ComplaintTable";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import RequisitionTable from "./../../dashboard/Requisitions/RequisitionsTable";
import { useRequisitions } from "../../../hooks/useRequisitions";
import { useEvents } from "../../../hooks/useEvents";
import AttendenceTable from "./../../dashboard/EventsAttendence/AttendenceTable/AttendenceTable";
import TravelOrderTable from "../../dashboard/TravelOrder/TravelOrderTable";
import { useTravelOrders } from "../../../hooks/useTravelOrders";
import AllocationsTable from "../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { useNotifications } from "../../../hooks/useNotification";
import { useAllocations } from "../../../hooks/useAllocations";
import NotificationsTable from "../../Membership/Notifications/NotificationsTable/NotificationTable";
import MemberTable from "../../Membership/Members/MemberTable/MemberTable";
import { useMembers } from "../../../hooks/useMember";
import FidaAssetsTable from "../../HumanResource/FidaAssets/FidaAssetsTable/FidaAssetsTable";
import { useAssets } from "../../../hooks/useAsset";
import ProjectTable from "../../LegalAid/ProjectFiles/ProjectPFilesTable/ProjectTable";
import FleetDatabaseTable from "../../fleetManager/FleetDatabaseTable/FleetDatabaseTable";
import { useFleets } from "../../../hooks/useFleet";

const DatabaseOpen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { dbName } = useParams();
  const { data, isLoading } = useClvs();
  const clientsData = useClients();
  const projectsData = useProjects();
  const leaveData = useLeaveRequests();
  const advanceData = useAdvances();
  const caseData = useCaseFiles();
  const itProductData = useItProducts();
  const itServicesData = useItServices();
  const itComplaintsData = useComplaints();
  const requisitionsData = useRequisitions();
  const tasksData = useTasks();
  const eventsData = useEvents();
  const travelData = useTravelOrders();
  const allocationsData = useAllocations();
  const notificationsData = useNotifications();
  const membersData = useMembers();
  const assetsData = useAssets();
  const fleetsData = useFleets();

  return (
    <>
      <ReportBreadCrumb
        root="Fida Database"
        rootLink="/fida-databases"
        folderName={dbName.replace(/-/g, " ")}
      />
      {isLoading |
      clientsData.isLoading |
      projectsData.isLoading |
      advanceData.isLoading |
      leaveData.isLoading |
      itProductData.isLoading |
      itServicesData.isLoading |
      requisitionsData.isLoading |
      notificationsData.isLoading |
      allocationsData.isLoading |
      membersData.isLoading |
      itComplaintsData.isLoading |
      travelData.isLoading |
      assetsData.isLoading |
      eventsData.isLoading |
      tasksData.isLoading |
      fleetsData.isLoading |
      tasksData.isLoading |
      caseData.isLoading ? (
        <Loader />
      ) : dbName === "clvs" && data?.clvs ? (
        <ClvTable
          showBtn={false}
          data={data ? data.clvs : null}
          btnLabel="Add CLV"
          tableName="CLV"
        />
      ) : dbName === "clients" && clientsData.data?.clients ? (
        <ClientsTable
          showBtn={false}
          data={clientsData.data ? clientsData.data.clients : null}
          btnLabel="Add Client"
          tableName="Clients"
        />
      ) : dbName === "projects" && projectsData.data?.projects ? (
        <FidaProjectTable
          showBtn={false}
          data={projectsData.data ? projectsData.data.projects : null}
          tableName="Fida Projects"
        />
      ) : dbName === "cases" && caseData.data?.cases ? (
        <CaseFilesTable
          showBtn={false}
          data={caseData.data ? caseData.data.cases : null}
          tableName="Case Files"
        />
      ) : dbName === "leavetrackers" && leaveData.data.leaves ? (
        <TrackerTable
          type="leave"
          showBtn={false}
          data={leaveData.data ? leaveData.data.leaves : null}
          tableName="Leave Tracker"
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
      ) : dbName === "itproducts" && itProductData.data?.ITProducts ? (
        <ITProductsTable
          showBtn={false}
          data={itProductData.data ? itProductData.data.ITProducts : null}
          tableName="IT Products"
        />
      ) : dbName === "services" && itServicesData.data?.services ? (
        <ITServicesTable
          showBtn={false}
          data={itServicesData.data ? itServicesData.data.services : null}
          tableName="IT Services"
        />
      ) : dbName === "complaints" && itComplaintsData.data?.complaints ? (
        <ComplaintsTable
          showBtn={false}
          data={itComplaintsData.data ? itComplaintsData.data.complaints : null}
          tableName="IT Complaints"
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
      ) : dbName === "travelorders" && travelData.data?.travelOrders ? (
        <TravelOrderTable
          showBtn={false}
          data={travelData.data ? travelData.data.travelOrders : null}
          tableName="Travel Order"
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
        <FidaAssetsTable
          showBtn={false}
          data={assetsData.data ? assetsData.data.assets : null}
          tableName="Fida Assets"
        />
      ) : dbName === "projectfiles" ? (
        <ProjectTable
          showBtn={false}
          // data={assetsData.data ? assetsData.data.assets : null}
        />
      ) : dbName === "fleets" && fleetsData.data?.fleets ? (
        <FleetDatabaseTable
          showBtn={false}
          data={fleetsData.data ? fleetsData.data.fleets : null}
          tableName="Fleet Database"
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
