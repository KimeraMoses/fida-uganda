import { useDisclosure } from "@chakra-ui/react";
import {
  useAddTravelOrder,
  useApprovedAccountantTravelOrders,
  useApprovedDopTravelOrders,
  useApprovedFleetManagerTravelOrders,
  useMyTravelOrders,
  usePendingAccountantTravelOrders,
  usePendingDopTravelOrders,
  usePendingFleetManagerTravelOrders,
  useRejectedAccountantTravelOrders,
  useRejectedDopTravelOrders,
  useRejectedFleetManagerTravelOrders,
} from "../../hooks/useTravelOrders";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
// import TravelOrderTable from "../dashboard/TravelOrder/TravelOrderTable";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import Loader from "../common/UI/Loader/Loader";
import {
  travelOrderInitialValues,
  travelOrderSchema,
} from "../forms/travelOrder/schemas/travelOrder";
import { useSelector } from "react-redux";
import Table from "../common/TableComponent/Table";
import { travelOrdersTableColumns } from "../../lib/tableColumns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjectOptions } from "../../hooks/useProjects";

const TravelOrder = () => {
  const navigate = useNavigate();
  const projectOptions = useProjectOptions();
  //get user and designation
  const { user } = useSelector((state) => state.auth);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const {  isLoading } = useTravelOrders();
  const { data: myTravelOrders, isLoading } = useMyTravelOrders();
  // console.log(myTravelOrders)

  const { data: pendingDopTravelOrders, isLoading: dopPending } =
    usePendingDopTravelOrders();
  const { data: approvedDopTravelOrders, isLoading: dopApproved } =
    useApprovedDopTravelOrders();
  const { data: rejectedDopTravelOrders, isLoading: dopRejected } =
    useRejectedDopTravelOrders();

  const { data: pendingAccountantTravelOrders, isLoading: accountsPending } =
    usePendingAccountantTravelOrders();
  const { data: approvedAccountantTravelOrders, isLoading: accountsApproved } =
    useApprovedAccountantTravelOrders();
  const { data: rejectedAccountantTravelOrders, isLoading: accountsRejected } =
    useRejectedAccountantTravelOrders();

  const { data: pendingFleetManagerTravelOrders, isLoading: fleetPending } =
    usePendingFleetManagerTravelOrders();
  const { data: approvedFleetManagerTravelOrders, isLoading: fleetApproved } =
    useApprovedFleetManagerTravelOrders();
  const { data: rejectedFleetManagerTravelOrders, isLoading: fleetRejected } =
    useRejectedFleetManagerTravelOrders();

  const [userData, setUserData] = useState([]);
  const [pendingDopData, setPendingDopData] = useState([]);
  const [approvedDopData, setApprovedDopData] = useState([]);
  const [rejectedDopData, setRejectedDopData] = useState([]);

  const [pendingAccountantData, setPendingAccountantData] = useState([]);
  const [approvedAccountantData, setApprovedAccountantData] = useState([]);
  const [rejectedAccountantData, setRejectedAccountantData] = useState([]);

  const [pendingFleetData, setPendingFleetData] = useState([]);
  const [approvedFleetData, setApprovedFleetData] = useState([]);
  const [rejectedFleetData, setRejectedFleetData] = useState([]);

  //set table data for other users
  useEffect(() => {
    setUserData([]);
    if (myTravelOrders?.travelOrders?.length) {
      const dataToSet = myTravelOrders?.travelOrders?.map((b) => {
        return {
          ...b,
          full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
          project: projectOptions.find((project) => project.value === b.project)
            ?.label,
          stage:
            b?.approval_levels.length === 0
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? "Fleet  Manager"
              : "Fleet  Manager",
          status:
            b?.approval_levels.length === 0
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? b?.fleetManagerApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.fleetManagerApprovalStatus === "rejected"
              ? b?.fleetManagerApprovalStatus
              : b?.fleetManagerApprovalStatus,
        };
      });
      setUserData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myTravelOrders]);

  //set data for pending DOP table
  useEffect(() => {
    setPendingDopData([]);
    if (pendingDopTravelOrders?.TravelOrders?.length) {
      const dataToSet = pendingDopTravelOrders?.TravelOrders?.map((b) => {
        return {
          ...b,
          full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
          project: projectOptions.find((project) => project.value === b.project)
            ?.label,
          stage:
            b?.approval_levels.length === 0
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? "Fleet  Manager"
              : "Fleet  Manager",
          status:
            b?.approval_levels.length === 0
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? b?.fleetManagerApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.fleetManagerApprovalStatus === "rejected"
              ? b?.fleetManagerApprovalStatus
              : b?.fleetManagerApprovalStatus,
        };
      });
      setPendingDopData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingDopTravelOrders]);

  //set data for rejected DOP table
  useEffect(() => {
    setRejectedDopData([]);
    if (rejectedDopTravelOrders?.TravelOrders?.length) {
      const dataToSet = rejectedDopTravelOrders?.TravelOrders?.map((b) => {
        return {
          ...b,
          full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
          project: projectOptions.find((project) => project.value === b.project)
            ?.label,
          stage:
            b?.approval_levels.length === 0
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? "Fleet  Manager"
              : "Fleet  Manager",
          status:
            b?.approval_levels.length === 0
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? b?.fleetManagerApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.fleetManagerApprovalStatus === "rejected"
              ? b?.fleetManagerApprovalStatus
              : b?.fleetManagerApprovalStatus,
        };
      });
      setRejectedDopData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rejectedDopTravelOrders]);

  //set data for approved DOP table
  useEffect(() => {
    setApprovedDopData([]);
    if (approvedDopTravelOrders?.TravelOrders?.length) {
      const dataToSet = approvedDopTravelOrders?.TravelOrders?.map((b) => {
        return {
          ...b,
          full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
          project: projectOptions.find((project) => project.value === b.project)
            ?.label,
          stage:
            b?.approval_levels.length === 0
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? "Fleet  Manager"
              : "Fleet  Manager",
          status:
            b?.approval_levels.length === 0
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? b?.fleetManagerApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.fleetManagerApprovalStatus === "rejected"
              ? b?.fleetManagerApprovalStatus
              : b?.fleetManagerApprovalStatus,
        };
      });
      setApprovedDopData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvedDopTravelOrders]);

  //set table data for pending Accountant table
  useEffect(() => {
    setPendingAccountantData([]);
    if (pendingAccountantTravelOrders?.TravelOrders?.length) {
      const dataToSet = pendingAccountantTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setPendingAccountantData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingAccountantTravelOrders]);

  //set table data for Approved Accountant table
  useEffect(() => {
    setApprovedAccountantData([]);
    if (approvedAccountantTravelOrders?.TravelOrders?.length) {
      const dataToSet = approvedAccountantTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setApprovedAccountantData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvedAccountantTravelOrders]);

  //set table data for rejected Accountant table
  useEffect(() => {
    setRejectedAccountantData([]);
    if (rejectedAccountantTravelOrders?.TravelOrders?.length) {
      const dataToSet = rejectedAccountantTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setRejectedAccountantData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rejectedAccountantTravelOrders]);

  //set table data for pending Fleet manager table
  useEffect(() => {
    setPendingFleetData([]);
    if (pendingFleetManagerTravelOrders?.TravelOrders?.length) {
      const dataToSet = pendingFleetManagerTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setPendingFleetData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingFleetManagerTravelOrders]);

  //set table data for Approved fleet manager table
  useEffect(() => {
    setApprovedFleetData([]);
    if (approvedFleetManagerTravelOrders?.TravelOrders?.length) {
      const dataToSet = approvedFleetManagerTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setApprovedFleetData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvedFleetManagerTravelOrders]);

  //set table data for rejected fleet manager table
  useEffect(() => {
    setRejectedFleetData([]);
    if (rejectedFleetManagerTravelOrders?.TravelOrders?.length) {
      const dataToSet = rejectedFleetManagerTravelOrders?.TravelOrders?.map(
        (b) => {
          return {
            ...b,
            full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
            project: projectOptions.find(
              (project) => project.value === b.project
            )?.label,
            stage:
              b?.approval_levels.length === 0
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? "Dop"
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? "Accountant"
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? "Fleet  Manager"
                : "Fleet  Manager",
            status:
              b?.approval_levels.length === 0
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "rejected"
                ? b?.DOPApprovalStatus
                : b?.approval_levels.length === 1 &&
                  b?.DOPApprovalStatus === "approved"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "rejected"
                ? b?.accountantApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.accountantApprovalStatus === "approved"
                ? b?.fleetManagerApprovalStatus
                : b?.approval_levels.length === 2 &&
                  b?.fleetManagerApprovalStatus === "rejected"
                ? b?.fleetManagerApprovalStatus
                : b?.fleetManagerApprovalStatus,
          };
        }
      );
      setRejectedFleetData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rejectedFleetManagerTravelOrders]);

  const handleViewSummary = (id) => {
    navigate(`/travel-order/${id.id}`);
  };

  return (
    <>
      <SectionHeader title="Travel Order" />
      {isLoading ? (
        <Loader />
      ) : (
        user.designation === "dop" && (
          <>
            <SubHeading title="My Travel Requests" />
            <Table
              data={userData.slice().reverse()}
              columns={travelOrdersTableColumns}
              loading={isLoading}
              btnLabel="Add Travel Order"
              btnClick={onOpen}
              showActions={true}
              onViewHandler={handleViewSummary}
              tableName="My Travel Requests"
            />
            {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
            <br />
            <SubHeading title="Unread Requests" />
            <Table
              data={pendingDopData}
              columns={travelOrdersTableColumns}
              loading={dopPending}
              showBtn={false}
              showActions={true}
              onViewHandler={handleViewSummary}
              tableName="Unread DOP travel requests"
            />
            {/*<TravelOrderTable data={pendingDopTravelOrders?.TravelOrders} type="new" showBtn={false}/>*/}
            <br />
            <SubHeading title="Approved Requests" />
            <Table
              data={approvedDopData}
              columns={travelOrdersTableColumns}
              loading={dopApproved}
              showBtn={false}
              showActions={true}
              onViewHandler={handleViewSummary}
              tableName="Approved DOP travel requests"
            />
            {/*<TravelOrderTable data={approvedDopTravelOrders?.TravelOrders} type="approved" showBtn={false}/>*/}
            <br />
            <SubHeading title="Rejected Requests" />
            <Table
              data={rejectedDopData}
              columns={travelOrdersTableColumns}
              loading={dopRejected}
              showBtn={false}
              showActions={true}
              onViewHandler={handleViewSummary}
              tableName="Rejected DOP travel requests"
            />
            {/*<TravelOrderTable data={rejectedDopTravelOrders?.TravelOrders} type="rejected" showBtn={false}/>*/}
          </>
        )
      )}

      {user.designation === "accountant" && (
        <>
          <SubHeading title="My Travel Requests" />
          <Table
            data={userData.slice().reverse()}
            columns={travelOrdersTableColumns}
            loading={isLoading}
            btnLabel="Add Travel Order"
            btnClick={onOpen}
            showActions={true}
            onViewHandler={handleViewSummary}
          />
          {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
          <br />
          <SubHeading title="Unread Requests" />
          <Table
            data={pendingAccountantData}
            columns={travelOrdersTableColumns}
            loading={accountsPending}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Pending Accountant travel requests"
          />
          {/*<TravelOrderTable data={pendingAccountantTravelOrders?.TravelOrders} type="new" showBtn={false}/>*/}
          <br />
          <SubHeading title="Approved Request" />
          <Table
            data={approvedAccountantData}
            columns={travelOrdersTableColumns}
            loading={accountsApproved}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Approved Accountant travel requests"
          />
          {/*<TravelOrderTable data={approvedAccountantTravelOrders?.TravelOrders} type="approved"*/}
          {/*                  showBtn={false}/>*/}
          <br />
          <SubHeading title="Rejected Request" />
          <Table
            data={rejectedAccountantData}
            columns={travelOrdersTableColumns}
            loading={accountsRejected}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Rejected Accountant travel requests"
          />
          {/*<TravelOrderTable data={rejectedAccountantTravelOrders?.TravelOrders} type="rejected"*/}
          {/*                  showBtn={false}/>*/}
        </>
      )}

      {user.designation === "fleetManager" && (
        <>
          <SubHeading title="My Travel Requests" />
          <Table
            data={userData.slice().reverse()}
            columns={travelOrdersTableColumns}
            loading={isLoading}
            btnLabel="Add Travel Order"
            btnClick={onOpen}
            showActions={true}
            onViewHandler={handleViewSummary}
          />
          {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
          <br />
          <SubHeading title="Unread Requests" />
          <Table
            data={pendingFleetData}
            columns={travelOrdersTableColumns}
            loading={fleetPending}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Pending Fleet Manager travel requests"
          />
          {/*<TravelOrderTable data={pendingFleetManagerTravelOrders?.TravelOrders} type="new" showBtn={false}/>*/}
          <br />
          <SubHeading title="Approved Request" />
          <Table
            data={approvedFleetData}
            columns={travelOrdersTableColumns}
            loading={fleetApproved}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Approved Fleet Manager travel requests"
          />
          {/*<TravelOrderTable data={approvedFleetManagerTravelOrders?.TravelOrders} type="approved"*/}
          {/*                  showBtn={false}/>*/}
          <br />
          <SubHeading title="Rejected Request" />
          <Table
            data={rejectedFleetData}
            columns={travelOrdersTableColumns}
            loading={fleetRejected}
            showBtn={false}
            showActions={true}
            onViewHandler={handleViewSummary}
            tableName="Rejected Fleet Manager travel requests"
          />
          {/*<TravelOrderTable data={rejectedFleetManagerTravelOrders?.TravelOrders} type="rejected"*/}
          {/*                  showBtn={false}/>*/}
        </>
      )}

      {/*rest of the users*/}
      {user.designation !== "dop" &&
        user.designation !== "accountant" &&
        user.designation !== "fleetManager" && (
          <>
            <SubHeading title="My Requests" />
            <Table
              data={userData.slice().reverse()}
              columns={travelOrdersTableColumns}
              loading={isLoading}
              btnLabel="Add Travel Order"
              btnClick={onOpen}
              showActions={true}
              onViewHandler={handleViewSummary}
            />
            {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="new" btnLabel="Travel Order" btnClick={onOpen}/>*/}
          </>
        )}

      <Modal isOpen={isOpen} onClose={onClose} title="Travel Order" size="2xl">
        <TravelOrderForm
          initialValues={travelOrderInitialValues}
          validationSchema={travelOrderSchema}
          onSuccess={onClose}
          success={`Travel order added successfully`}
          useMutate={useAddTravelOrder}
        />
      </Modal>
    </>
  );
};

export default TravelOrder;
