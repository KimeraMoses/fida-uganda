import React, {useState} from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {SimpleGrid, Textarea} from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FormButton from "../../common/UI/FormButton/FormButton";
import {useAdvance, useApproveAdvance, useRejectAdvance} from "../../../hooks/useAdvances";
import {
  useApproveLeaveRequest,
  useLeaveRequest, useRejectLeaveRequest,
  // useApproveLeaveRequest,
} from "../../../hooks/useLeaveRequest";
import {useApproveTravelOrder, useRejectTravelOrder, useTravelOrder} from "../../../hooks/useTravelOrders";
import {useApproveRequisition, useRejectRequisition, useRequisition} from "../../../hooks/useRequisitions";
import Loader from "../../common/UI/Loader/Loader";


import {useSelector} from "react-redux";


const SummaryDetails = (props) => {
  const { type, isSubmitting } = props;
  const navigate = useNavigate();

  //get user and designation
  const {user} = useSelector((state) => state.auth)
  console.log(user)
  console.log(user.designation)

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
  //  console.log(travelData)

  const {data:reqData, isLoading: loadingReqData} = useRequisition(reqName);
  //  console.log(reqData)
  // console.log(reqName)



  const [remarks, setRemarks] = useState('');

  const {mutate: approveTravel} = useApproveTravelOrder();
  const {mutate: rejectTravel} = useRejectTravelOrder();

  const {mutate: approveReq} = useApproveRequisition();
  const {mutate: rejectReq} = useRejectRequisition();

  const {mutate:approveLeaveReq} = useApproveLeaveRequest();
  const {mutate: rejectLeaveReq} = useRejectLeaveRequest();

  const {mutate: approveAdv} = useApproveAdvance();
  const {mutate: rejectAdv} = useRejectAdvance();



  const approveTravelOrder = () =>{
    approveTravel({travelName,remarks});
    // console.log(travelName,remarks)
  }

  const rejectTravelOrder =()=>{
    rejectTravel({travelName,remarks})
    // console.log(travelName,remarks)
  }

  const approveRequisition = React.useCallback(() =>{
    approveReq({reqName,remarks});
    // console.log(remarks,reqName)

  },[reqName,remarks])

  const rejectRequisition =()=>{
    rejectReq({reqName,remarks});
  }

  const approveLeave =() =>{
   approveLeaveReq({id,remarks});
  }

  const rejectLeave =()=>{
    rejectLeaveReq({id,remarks});

  }

  const approveAdvance =()=> {
    approveAdv({id,remarks});

  }
  const rejectAdvance =()=>{
    rejectAdv({id,remarks})

  }



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
            {
              (isLoading && selectedType==="advance") ?  <Loader/>: !isLoading && data && selectedType !== "leave" && (
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
            )
            }
            {
              (loadingReqData && type === "requisition")? <Loader/>: !loadingReqData && reqName && type === "requisition" && (
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
                total amount not included
                <h6>45</h6>
                <h6>Subject of Procurement:</h6>
                <h6>{reqData?.requisition?.subject_of_procurement}</h6>
                <h6>Date required:</h6>
                <h6>{new Date(reqData?.requisition?.date_required).toLocaleString()}</h6>
                <h6>Delivery Location:</h6>
                <h6>{reqData?.requisition?.delivery_location}</h6>
              </SimpleGrid>
            )
            }

            {
              (loadingTravelOrders && type === "travel")? <Loader/>: !loadingTravelOrders && travelData && type === "travel" && (
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
            )
            }

            {
              (loadingLeaveRequests && selectedType === "leave")? <Loader/>: !loadingLeaveRequests && leaveData && selectedType === "leave" && (
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
            )
            }
          </div>
        </div>





        {type === "travel" && ((user.designation === "dop")  ||(user.designation === "accountant") ||
                (user.designation === "fleetManager") ||(user.designation === "ceo")) &&

            <div className={classes.table_wrapper}>
              <h6>Travel Roles</h6>
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

              <form>
                <div className={classes.remarks_wrapper}>
                  <h6>
                    <strong>Remarks</strong>
                  </h6>
                  <Textarea placeholder="Leave a remark here" name="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}

                  />
                </div>
                <hr/>
                <div className={classes.form_action_wrapper}>
                  <FormButton variant="cancel" type="submit" onClick={rejectTravelOrder}>
                    Reject
                  </FormButton>
                  <FormButton variant="save" type="submit"  onClick={approveTravelOrder}>
                    {isSubmitting ? "Approving..." : "Approve"}
                  </FormButton>
                </div>
              </form>
            </div>
        }

        {/*normal users*/}
        { ((type === "travel") || (type === "requisition") || (selectedType === "leave") || (selectedType === "advance")) &&
            ((user.designation !== "dop") && (user.designation !== "accountant") && (user.designation !== "finance") &&
                (user.designation !== "fleetManager") ||(user.designation !== "ceo") &&
                (user.designation !== "procurement") && (user.designation === "supervisor")) &&

            <div className={classes.table_wrapper}>
              <h6>{type} {selectedType}Roles</h6>
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
        }

        {type === "requisition" && ((user.designation === "dop")  ||(user.designation === "accountant") ||
                (user.designation === "procurement") || (user.designation === "ceo")) &&

            <div className={classes.table_wrapper}>
              <h6>Requisition Roles</h6>
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

              <form>
                <div className={classes.remarks_wrapper}>
                  <h6>
                    <strong>Remarks</strong>
                  </h6>
                  <Textarea placeholder="Leave a remark here" name="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}

                  />
                </div>
                <hr/>
                <div className={classes.form_action_wrapper}>
                  <FormButton variant="cancel" type="submit" onClick={rejectRequisition}>
                    Reject
                  </FormButton>
                  <FormButton variant="save" type="submit"  onClick={approveRequisition}>
                    {isSubmitting ? "Approving..." : "Approve"}
                  </FormButton>
                </div>
              </form >
            </div>
        }

        {selectedType === "leave" && ((user.designation === "dop") ||(user.designation === "supervisor") || (user.designation === "humanResources") ||
                (user.designation === "ceo")) &&

            <div className={classes.table_wrapper}>
              <h6>Leave Roles</h6>
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

              <form>
                <div className={classes.remarks_wrapper}>
                  <h6>
                    <strong>Remarks</strong>
                  </h6>
                  <Textarea placeholder="Leave a remark here" name="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}

                  />
                </div>
                <hr/>
                <div className={classes.form_action_wrapper}>
                  <FormButton variant="cancel" type="submit" onClick={rejectLeave}>
                    Reject
                  </FormButton>
                  <FormButton variant="save" type="submit"  onClick={approveLeave}>
                    {isSubmitting ? "Approving..." : "Approve"}
                  </FormButton>
                </div>
              </form >
            </div>
        }


        {selectedType === "advance" && ((user.designation === "dop")  ||(user.designation === "accountant") || (user.designation === "ceo") ||
                (user.designation === "finance")) &&

            <div className={classes.table_wrapper}>
              <h6>Advance Roles</h6>
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

              <form>
                <div className={classes.remarks_wrapper}>
                  <h6>
                    <strong>Remarks</strong>
                  </h6>
                  <Textarea placeholder="Leave a remark here" name="remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}

                  />
                </div>
                <hr/>
                <div className={classes.form_action_wrapper}>
                  <FormButton variant="cancel" type="submit" onClick={rejectAdvance}>
                    Reject
                  </FormButton>
                  <FormButton variant="save" type="submit"  onClick={approveAdvance}>
                    {isSubmitting ? "Approving..." : "Approve"}
                  </FormButton>
                </div>
              </form>
            </div>
        }


      </div>
    </div>
  );
};

export default SummaryDetails;
