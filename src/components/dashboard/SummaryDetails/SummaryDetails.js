import React from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate, useLocation } from "react-router-dom";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useAdvance } from "../../../hooks/useAdvances";
import {
  useLeaveRequest,
  // useApproveLeaveRequest,
} from "../../../hooks/useLeaveRequest";

export const TravelData = [
  {
    stage: "Stage 1",
    userName: "David Balibali",
    designation: "CLV Coordinator",
    status: "Submited",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 2",
    userName: "Kityo Masanganzira",
    designation: "DoP",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 3",
    userName: "Jane Mukasa",
    designation: "Accountant IDLO",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 4",
    userName: "James Musinguzi.",
    designation: "Fleet Manager",
    status: "Pending",
    remarks: "No remarks",
    date: "14/03/2022",
  },
];

export const LeaveData = [
  {
    stage: "Stage 1",
    userName: "David Balibali",
    designation: "Legal Officer",
    status: "Submited",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 2",
    userName: "Kityo Masanganzira",
    designation: "Immediate Supervisor",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 3",
    userName: "Jane Mukasa",
    designation: "HR",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 4",
    userName: "James Musinguzi.",
    designation: "CEO",
    status: "Pending",
    remarks: "No remarks",
    date: "14/03/2022",
  },
];
export const advanceData = [
  {
    stage: "Stage 1",
    userName: "David Balibali",
    designation: "Legal Officer",
    status: "Submited",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 2",
    userName: "Kityo Masanganzira",
    designation: "HR",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 3",
    userName: "Jane Mukasa",
    designation: "CEO",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 4",
    userName: "James Musinguzi.",
    designation: "Finance",
    status: "Pending",
    remarks: "No remarks",
    date: "14/03/2022",
  },
];

export const requisitionData = [
  {
    stage: "Stage 1",
    userName: "David Balibali",
    designation: "CLV Coordinator",
    status: "Submited",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 2",
    userName: "Kityo Masanganzira",
    designation: "DoP",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 3",
    userName: "Jane Mukasa",
    designation: "Accountant IDLO",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 4",
    userName: "James Musinguzi.",
    designation: "Procurement Officier",
    status: "Pending",
    remarks: "No remarks",
    date: "14/03/2022",
  },
];

const SummaryDetails = (props) => {
  const { type, isSubmitting } = props;
  const navigate = useNavigate();

  //====GET THE SELECTED DOCUMENT CATEGORY====//
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const selectedType = query.get("application-type");
  const id = query.get("id");

  const { data, isLoading } = useAdvance(id);

  const { data: leaveData, isLoading: loadingLeaveRequests } =
    useLeaveRequest(id);

  return (
    <div className={classes.summary_wrapper}>
      <div className={classes.summary_header}>
        <MdOutlineArrowBackIosNew
          onClick={() =>
            navigate(
              `${
                type === "requisition"
                  ? "/requisitions"
                  : type === "travel"
                  ? "/travel-order"
                  : "/leave-advance-tracker"
              }`
            )
          }
        />
        <h1>
          {type === "requisition"
            ? "Requisition Summary"
            : type === "travel"
            ? "Travel Order Summary"
            : `March ${
                selectedType === "leave" ? "Leave" : "Advance"
              } Application`}
        </h1>
      </div>
      <div className={classes.summary_details_wrapper}>
        <div className={classes.summary_wrapper_inner}>
          <h2>
            {type === "requisition"
              ? "Requisition Summary"
              : type === "travel"
              ? "Travel Order Summary"
              : `${
                  selectedType === "leave" ? "Leave" : "Advance"
                } Aplication Form Summary`}
          </h2>

          <div className={classes.user_details}>
            {!isLoading && data && selectedType !== "leave" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date of Application:</h6>
                <h6>{new Date(data?.advance?.createdAt).toLocaleString()}</h6>
                <h6>Name:</h6>
                <h6>Namugambi Cynthia</h6>
                <h6>Designation:</h6>
                <h6>{data?.advance?.user?.designation}</h6>
                <h6>Budget Year:</h6>
                <h6>2021/2022</h6>
                <h6>Month for Appliction:</h6>
                <h6>February</h6>
                <h6>Net Salary:</h6>
                <h6>1,250,000</h6>
                <h6>Advance:</h6>
                <h6>250,000</h6>
                <h6>Reason:</h6>
                <h6>Preparations for my wedding</h6>
              </SimpleGrid>
            )}
            {type === "requisition" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Project Name:</h6>
                <h6>IDLO</h6>
                <h6>Budget year :</h6>
                <h6>2021/2022</h6>
                <h6>Type: </h6>
                <h6>Product Requisition</h6>
                <h6>Unit Price:</h6>
                <h6>UGX.3,500,000.00</h6>
                <h6>Number of Units:</h6>
                <h6>4</h6>
                <h6>Total Amount:</h6>
                <h6>14,000,000.00</h6>
                <h6>Subject of Procurement:</h6>
                <h6>Macbook pro M1 2020 16</h6>
                <h6>Date required:</h6>
                <h6>17/03/2022</h6>
                <h6>Delivery Location:</h6>
                <h6>FIDA Headquarters, Robert Mugabe Rd Kampala</h6>
              </SimpleGrid>
            )}

            {type === "travel" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date requested:</h6>
                <h6>12/04/2022</h6>
                <h6>Journey start time:</h6>
                <h6>08:00 am</h6>
                <h6>Journey end time: </h6>
                <h6>06:00 pm</h6>
                <h6>Pick up location:</h6>
                <h6>FIDA Headquarters</h6>
                <h6>Destination:</h6>
                <h6>Paidha, Zombo District</h6>
                <h6>Project:</h6>
                <h6>IDLO</h6>
                <h6>Project Activity:</h6>
                <h6>District inception meeting</h6>
                <h6>Purpose of Activity:</h6>
                <h6>Introduction of the project to the district leaders</h6>
                <h6>Date required:</h6>
                <h6>17/03/2022</h6>
              </SimpleGrid>
            )}

            {!loadingLeaveRequests && leaveData && selectedType === "leave" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date of Application:</h6>
                <h6>
                  {new Date(leaveData?.leave?.createdAt).toLocaleString()}
                </h6>
                <h6>Name:</h6>
                <h6>{leaveData?.leave?.user?.full_name}</h6>
                <h6>Designation:</h6>
                <h6>{leaveData?.leave?.user?.designation}</h6>
                <h6>I wish to apply for:</h6>
                <h6>{selectedType}</h6>
                <h6>Reason:</h6>
                <h6>{leaveData?.leave?.reason}</h6>
                <h6>While on leave my physical contact will be:</h6>
                <h6>{leaveData?.leave?.address_on_leave}</h6>
                <h6>Tel:</h6>
                <h6>{leaveData?.leave?.tel_on_leave}</h6>
              </SimpleGrid>
            )}
          </div>
        </div>
        <div className={classes.table_wrapper}>
          <h6>Requisition Roles{type}</h6>
          <SummaryTable
            data={
              type === "requisition"
                ? requisitionData
                : type === "travel"
                ? TravelData
                : selectedType === "leave"
                ? LeaveData
                : selectedType !== "leave"
                ? advanceData
                : TravelData
            }
          />
        </div>
        <div className={classes.remarks_wrapper}>
          <h6>
            <strong>Remarks</strong>
          </h6>
          <Textarea placeholder="Type here" />
        </div>

        {selectedType === "leave" && (
          <div className={classes.form_action_wrapper}>
            <FormButton variant="cancel" type="button">
              Reject
            </FormButton>
            <FormButton variant="save" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Approving..." : "Approve"}
            </FormButton>
          </div>
        )}

        {selectedType === "advance" && (
          <div className={classes.form_action_wrapper}>
            <FormButton variant="cancel" type="button">
              Reject
            </FormButton>
            <FormButton variant="save" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Approving..." : "Approve"}
            </FormButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryDetails;
