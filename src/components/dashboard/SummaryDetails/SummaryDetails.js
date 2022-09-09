import React, { useState } from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SimpleGrid, Textarea, Button } from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import FormButton from "../../common/UI/FormButton/FormButton";
import {
  useAdvance,
  useApproveAdvance,
  useRejectAdvance,
} from "../../../hooks/useAdvances";
import {
  useApproveLeaveRequest,
  useLeaveRequest,
  useRejectLeaveRequest,
  // useApproveLeaveRequest,
} from "../../../hooks/useLeaveRequest";
import {
  useApproveTravelOrder,
  useRejectTravelOrder,
  useTravelOrder,
} from "../../../hooks/useTravelOrders";
import {
  useApproveRequisition,
  useRejectRequisition,
  useRequisition,
} from "../../../hooks/useRequisitions";
import Loader from "../../common/UI/Loader/Loader";

import { useSelector } from "react-redux";

const SummaryDetails = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const [disableReject,setDisableReject] = useState(false);
  const [disableApprove,setDisableApprove] = useState(false);

  //get user and designation
  const { user } = useSelector((state) => state.auth);

  //====GET THE SELECTED DOCUMENT CATEGORY====//
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const selectedType = query.get("application-type");
  const id = query.get("id");

  const { travelName } = useParams();

  const { reqName } = useParams();

  const { data, isLoading } = useAdvance(id);

  const { data: leaveData, isLoading: loadingLeaveRequests } =
    useLeaveRequest(id);

  const { data: travelData, isLoading: loadingTravelOrders } =
    useTravelOrder(travelName);

  const { data: reqData, isLoading: loadingReqData } = useRequisition(reqName);

  const [remarks, setRemarks] = useState("");

  const { mutate: approveReq } = useApproveRequisition();
  const { mutate: rejectReq } = useRejectRequisition();

  const { mutate: approveLeaveReq } = useApproveLeaveRequest();
  const { mutate: rejectLeaveReq } = useRejectLeaveRequest();

  const { mutate: approveAdv } = useApproveAdvance();
  const { mutate: rejectAdv } = useRejectAdvance();

  const { mutate: approveTravel } = useApproveTravelOrder();
  const { mutate: rejectTravel } = useRejectTravelOrder();

  const approveTravelOrder = (e) => {
    e.preventDefault();
    setDisableApprove(true);
    approveTravel({ travelName, remarks });

  };

  const rejectTravelOrder = (e) => {
    e.preventDefault();
    setDisableReject(true);
    rejectTravel({ travelName, remarks });

  };

  const approveRequisition = React.useCallback(
    (e) => {
      e.preventDefault();
      setDisableApprove(true);
      approveReq({ reqName, remarks });
      // console.log(remarks,reqName)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reqName, remarks]
  );

  const rejectRequisition = (e) => {
    e.preventDefault();
    setDisableReject(true);
    rejectReq({ reqName, remarks });
  };

  const approveLeave = (e) => {
    e.preventDefault();
    setDisableApprove(true);
    approveLeaveReq({ id, remarks });
  };

  const rejectLeave = (e) => {
    e.preventDefault();
    setDisableReject(true);
    rejectLeaveReq({ id, remarks });
  };

  const approveAdvance = (e) => {
    e.preventDefault();
    setDisableApprove(true);
    approveAdv({ id, remarks });
  };
  const rejectAdvance = (e) => {
    e.preventDefault();
    setDisableReject(true);
    rejectAdv({ id, remarks });
  };

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
            : ` ${selectedType === "leave" ? "Leave" : "Advance"} Application`}
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
            {isLoading && selectedType === "advance" ? (
              <Loader />
            ) : (
              !isLoading &&
              data &&
              selectedType !== "leave" && (
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
            )}
            {loadingReqData && type === "requisition" ? (
              <Loader />
            ) : (
              !loadingReqData &&
              reqName &&
              type === "requisition" && (
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
                  <h6>Subject of Procurement:</h6>
                  <h6>{reqData?.requisition?.subject_of_procurement}</h6>
                  <h6>Date required:</h6>
                  <h6>
                    {new Date(
                      reqData?.requisition?.date_required
                    ).toLocaleString()}
                  </h6>
                  <h6>Delivery Location:</h6>
                  <h6>{reqData?.requisition?.delivery_location}</h6>
                </SimpleGrid>
              )
            )}

            {loadingTravelOrders && type === "travel" ? (
              <Loader />
            ) : (
              !loadingTravelOrders &&
              travelData &&
              type === "travel" && (
                <SimpleGrid columns={2} spacing={1}>
                  <h6>Date requested:</h6>
                  <h6>
                    {new Date(
                      travelData?.travelOrder?.createdAt
                    ).toLocaleString()}
                  </h6>
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
                  <h6>
                    {new Date(
                      travelData?.travelOrder?.updateAt
                    ).toLocaleString()}
                  </h6>
                </SimpleGrid>
              )
            )}

            {loadingLeaveRequests && selectedType === "leave" ? (
              <Loader />
            ) : (
              !loadingLeaveRequests &&
              leaveData &&
              selectedType === "leave" && (
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
            )}
          </div>
        </div>

        {type === "travel" &&
          (user.designation === "dop" ||
            user.designation === "finance" ||
            user.designation === "accountant" ||
            user.designation === "fleetManager" ||
            user.designation === "supervisor" ||
            user.designation === "humanResources" ||
            user.designation === "procurement" ||
            user.designation === "ceo") && (
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

              {/*dop Approval- level 1*/}
              {travelData?.travelOrder?.approval_levels?.length === 0 &&
                user.designation === "dop" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectTravelOrder}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveTravelOrder}>
                        Approve
                      </Button>
                      {/*<FormButton*/}
                      {/*    variant="cancel"*/}
                      {/*    disabled={isDisabled}*/}
                      {/*    type="submit"*/}
                      {/*    onClick={approveTravelOrder}*/}
                      {/*>*/}
                      {/*  {isSubmitting ? "Rejecting..." : "Reject"}*/}
                      {/*</FormButton>*/}

                      {/*<FormButton*/}
                      {/*    variant="save"*/}
                      {/*    disabled={isDisabled}*/}
                      {/*    type="submit"*/}
                      {/*    onClick={approveTravelOrder}*/}
                      {/*>*/}
                      {/*  {isSubmitting ? "Approving..." : "Approve"}*/}
                      {/*</FormButton>*/}

                    </div>
                  </form>
                )}

              {/*accountant approval - level 2*/}
              {travelData?.travelOrder?.approval_levels?.length === 1 &&
                travelData?.travelOrder?.approval_levels?.[0]?.status ===
                  "approved" &&
                user.designation === "accountant" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectTravelOrder}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveTravelOrder}>
                        Approve
                      </Button>

                    </div>
                  </form>
                )}

              {/*fleet manager approval level-3*/}
              {travelData?.travelOrder?.approval_levels?.length === 2 &&
                travelData?.travelOrder?.approval_levels?.[1]?.status ===
                  "approved" &&
                user.designation === "fleetManager" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectTravelOrder}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveTravelOrder}>
                        Approve
                      </Button>

                    </div>
                  </form>
                )}
            </div>
          )}

        {/*normal users*/}
        {(type === "travel" ||
          type === "requisition" ||
          selectedType === "leave" ||
          selectedType === "advance") &&
          user.designation !== "dop" &&
          user.designation !== "humanResources" &&
          user.designation !== "accountant" &&
          user.designation !== "finance" &&
          user.designation !== "fleetManager" &&
          user.designation !== "ceo" &&
          user.designation !== "procurement" &&
          user.designation !== "supervisor" && (
            <div className={classes.table_wrapper}>
              <h6>
                {type} {selectedType}Roles
              </h6>
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
          )}

        {type === "requisition" &&
          (user.designation === "dop" ||
            user.designation === "finance" ||
            user.designation === "accountant" ||
            user.designation === "procurement" ||
            user.designation === "fleetManager" ||
            user.designation === "humanResources" ||
            user.designation === "supervisor" ||
            user.designation === "ceo") && (
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

              {/*dop Approval- level 1*/}
              {reqData?.requisition?.approval_levels?.length === 0 &&
                user.designation === "dop" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectRequisition}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveRequisition}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}

              {/*accountant approval - level 2*/}
              {reqData?.requisition?.approval_levels?.length === 1 &&
                reqData?.requisition?.approval_levels?.[0]?.status ===
                  "approved" &&
                user.designation === "accountant" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectRequisition}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveRequisition}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}

              {/*ceo approval - level 3*/}
              {reqData?.requisition?.approval_levels?.length === 2 &&
                reqData?.requisition?.approval_levels?.[1]?.status ===
                  "approved" &&
                user.designation === "ceo" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectRequisition}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveRequisition}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}

              {/*procurement approval - level 4*/}
              {reqData?.requisition?.approval_levels?.length === 3 &&
                reqData?.requisition?.approval_levels?.[2]?.status ===
                  "approved" &&
                user.designation === "procurement" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectRequisition}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveRequisition}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
            </div>
          )}

        {selectedType === "leave" &&
          (user.designation === "dop" ||
            user.designation === "finance" ||
            user.designation === "supervisor" ||
            user.designation === "humanResources" ||
            user.designation === "procurement" ||
            user.designation === "fleetManager" ||
            user.designation === "accountant" ||
            user.designation === "ceo") && (
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

              {/*dop Approval- level 1*/}
              {leaveData?.leave?.approval_levels?.length === 0 &&
                user.designation === "dop" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectLeave}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveLeave}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
              {/*humanResources approval - level 2*/}
              {leaveData?.leave?.approval_levels?.length === 1 &&
                leaveData?.leave?.approval_levels?.[0]?.status === "approved" &&
                user.designation === "humanResources" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectLeave}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveLeave}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
              {/*ceo approval - level 3*/}
              {leaveData?.leave?.approval_levels?.length === 2 &&
                leaveData?.leave?.approval_levels?.[1]?.status === "approved" &&
                user.designation === "ceo" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectLeave}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveLeave}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
            </div>
          )}

        {selectedType === "advance" &&
          (user.designation === "dop" ||
            user.designation === "accountant" ||
            user.designation === "ceo" ||
            user.designation === "fleetManager" ||
            user.designation === "procurement" ||
            user.designation === "humanResources" ||
            user.designation === "supervisor" ||
            user.designation === "finance") && (
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

              {/*dop Approval- level 1*/}
              {data?.advance?.approval_levels?.length === 0 &&
                user.designation === "dop" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectAdvance}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveLeave}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}

              {/*accountant approval - level 2*/}
              {data?.advance?.approval_levels?.length === 1 &&
                data?.advance?.approval_levels?.[0]?.status === "approved" &&
                user.designation === "accountant" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectAdvance}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveAdvance}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
              {/*ceo approval - level 3*/}
              {data?.advance?.approval_levels?.length === 2 &&
                data?.advance?.approval_levels?.[1]?.status === "approved" &&
                user.designation === "ceo" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectAdvance}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveAdvance}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
              {/*finance approval - level 4*/}
              {data?.advance?.approval_levels?.length === 3 &&
                data?.advance?.approval_levels?.[2]?.status === "approved" &&
                user.designation === "finance" && (
                  <form>
                    <div className={classes.remarks_wrapper}>
                      <h6>
                        <strong>Remarks</strong>
                      </h6>
                      <Textarea
                        placeholder="Leave a remark here"
                        name="remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className={classes.form_action_wrapper}>
                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#ff3838'
                          _hover={{ color: "white", background:"#ff3838" }}
                          size="lg"
                          color="black"
                          borderColor="#ff3838"
                          isLoading={disableReject}
                          loadingText='Rejecting'
                          onClick={rejectAdvance}>
                        Reject
                      </Button>

                      <Button
                          variant='outline'
                          type="submit"
                          borderRadius="full"
                          colorScheme='#562b85'
                          _hover={{ color: "white", background:"#562b85" }}
                          size="lg"
                          color="black"
                          borderColor="#562b85"
                          isLoading={disableApprove}
                          loadingText='Approving'
                          onClick={approveAdvance}>
                        Approve
                      </Button>
                    </div>
                  </form>
                )}
            </div>
          )}
      </div>
    </div>
  );
};

export default SummaryDetails;
