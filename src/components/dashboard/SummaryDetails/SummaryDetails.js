import React from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useAdvance } from "../../../hooks/useAdvances";
import {
  useLeaveRequest,
  // useApproveLeaveRequest,
} from "../../../hooks/useLeaveRequest";
import {useTravelOrder} from "../../../hooks/useTravelOrders";
import {useRequisition} from "../../../hooks/useRequisitions";
import Loader from "../../common/UI/Loader/Loader";

// export const TravelData = [
//   {
//     stage: "Stage 1",
//     userName: "David Balibali",
//     designation: "CLV Coordinator",
//     status: "Submited",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 2",
//     userName: "Kityo Masanganzira",
//     designation: "DoP",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 3",
//     userName: "Jane Mukasa",
//     designation: "Accountant IDLO",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 4",
//     userName: "James Musinguzi.",
//     designation: "Fleet Manager",
//     status: "Pending",
//     remarks: "No remarks",
//     date: "14/03/2022",
//   },
// ];
//
// export const LeaveData = [
//   {
//     stage: "Stage 1",
//     userName: "David Balibali",
//     designation: "Legal Officer",
//     status: "Submited",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 2",
//     userName: "Kityo Masanganzira",
//     designation: "Immediate Supervisor",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 3",
//     userName: "Jane Mukasa",
//     designation: "HR",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 4",
//     userName: "James Musinguzi.",
//     designation: "CEO",
//     status: "Pending",
//     remarks: "No remarks",
//     date: "14/03/2022",
//   },
// ];
// export const advanceData = [
//   {
//     stage: "Stage 1",
//     userName: "David Balibali",
//     designation: "Legal Officer",
//     status: "Submited",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 2",
//     userName: "Kityo Masanganzira",
//     designation: "HR",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 3",
//     userName: "Jane Mukasa",
//     designation: "CEO",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 4",
//     userName: "James Musinguzi.",
//     designation: "Finance",
//     status: "Pending",
//     remarks: "No remarks",
//     date: "14/03/2022",
//   },
// ];

// export const requisitionData = [
//   {
//     stage: "Stage 1",
//     userName: "David Balibali",
//     designation: "CLV Coordinator",
//     status: "Submited",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 2",
//     userName: "Kityo Masanganzira",
//     designation: "DoP",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 3",
//     userName: "Jane Mukasa",
//     designation: "Accountant IDLO",
//     status: "Approved",
//     remarks: "No remarks",
//     date: "10/03/2022",
//   },
//   {
//     stage: "Stage 4",
//     userName: "James Musinguzi.",
//     designation: "Procurement Officier",
//     status: "Pending",
//     remarks: "No remarks",
//     date: "14/03/2022",
//   },
// ];

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

    const {travelName} = useParams();
  // console.log(travelName)

  const {reqName}= useParams();
  // console.log(reqName)

   const { data, isLoading } = useAdvance(id);
   // console.log(data);

  const { data: leaveData, isLoading: loadingLeaveRequests } =
    useLeaveRequest(id);
  // console.log(leaveData)

  const {data: travelData, isLoading: loadingTravelOrders} =  useTravelOrder(travelName);
   console.log(travelData)

  const {data:reqData, isLoading: loadingReqData} = useRequisition(reqName);
   // console.log(reqData)


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
            : ` ${
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
            {isLoading? <Loader/>: !isLoading && data && selectedType !== "leave" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date of Application:</h6>
                <h6>{new Date(data?.advance?.createdAt).toLocaleString()}</h6>
                <h6>Name:</h6>
                <h6>{data?.advance?.user?.full_name}</h6>
                <h6>Designation:</h6>
                <h6>{data?.advance?.user?.designation}</h6>
                <h6>Budget Year:</h6>
                <h6>{data?.advance?.budget_year}</h6>
                <h6>Month for Application:</h6>
                <h6>{data?.advance?.month}</h6>
                <h6>Net Salary:</h6>
                <h6>{data?.advance?.net_pay}</h6>
                <h6>Advance:</h6>
                <h6>{data?.advance?.amount}</h6>
                <h6>Reason:</h6>
                <h6>{data?.advance?.reason}</h6>
              </SimpleGrid>
            )}
            {loadingReqData? <Loader/>: !loadingReqData && reqName && type === "requisition" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Project Name:</h6>
                <h6>{reqData?.requisition?.project_name}</h6>
                <h6>Budget year </h6>
                <h6>{reqData?.requisition?.budget_year}</h6>
                <h6>Type: </h6>
                <h6>{reqData?.requisition?.type}</h6>
                <h6>Unit Price:</h6>
                <h6>{reqData?.requisition?.unit_price}</h6>
                <h6>Number of Units:</h6>
                <h6>{reqData?.requisition?.num_units}</h6>
                <h6>Total Amount:</h6>
                {/*total amount not included*/}
                <h6>45</h6>
                <h6>Subject of Procurement:</h6>
                <h6>{reqData?.requisition?.subject_of_procurement}</h6>
                <h6>Date required:</h6>
                <h6>{new Date(reqData?.requisition?.date_required).toLocaleString()}</h6>
                <h6>Delivery Location:</h6>
                <h6>{reqData?.requisition?.delivery_location}</h6>
              </SimpleGrid>
            )}

            {loadingTravelOrders? <Loader/>: !loadingTravelOrders && travelData && type === "travel" && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date requested:</h6>
                <h6>{new Date(travelData?.travelOrder?.createdAt).toLocaleString()}</h6>
                <h6>Journey start time:</h6>
                <h6>{travelData?.travelOrder?.journey_start_time}</h6>
                <h6>Journey end time: </h6>
                <h6>{travelData?.travelOrder?.journey_end_time}</h6>
                <h6>Pick up location:</h6>
                <h6>{travelData?.travelOrder?.pickup_location}</h6>
                <h6>Destination:</h6>
                <h6>{travelData?.travelOrder?.destination}</h6>
                <h6>Project:</h6>
                <h6>{travelData?.travelOrder?.project}</h6>
                <h6>Project Activity:</h6>
                <h6>{travelData?.travelOrder?.project_activity}</h6>
                <h6>Purpose of Activity:</h6>
                <h6>{travelData?.travelOrder?.purpose}</h6>
                <h6>Date required:</h6>
                {/*Not sure of the date required field name*/}
                <h6>{new Date(travelData?.travelOrder?.updateAt).toLocaleString()}</h6>
              </SimpleGrid>
            )}

            {loadingTravelOrders? <Loader/>: !loadingLeaveRequests && leaveData && selectedType === "leave" && (
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
          <h6>Requisition Roles {type}</h6>
          <SummaryTable
            data={
              type === "requisition"
                ? reqData
                : type === "travel"
                ? travelData
                : selectedType === "leave"
                ? leaveData
                : selectedType !== "leave"
                ? data
                : travelData
            }
          />
        </div>
        <form>
        <div className={classes.remarks_wrapper}>
          <h6>
            <strong>Remarks</strong>
          </h6>
          <Textarea placeholder="Type here" />
        </div>
        {(type === "travel" || type === "requisition") && (
          <div className={`${classes.form_action_wrapper} ${classes.single_btn}`}>
            <FormButton variant="saved" type="submit" disabled={isSubmitting}>
              Send
            </FormButton>
          </div>
        )}

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
        </form>
      </div>
    </div>
  );
};

export default SummaryDetails;
