import React from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate, useLocation } from "react-router-dom";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useAdvance } from "../../../hooks/useAdvances";

const userDetails = [
  { field: "Date of application", value: "10/03/2022" },
  { field: "Name", value: "Kimera Moses" },
  { field: "Designation", value: "Legal Officer" },
  { field: "Date of Appointment", value: "10/02/2021" },
  { field: "I wish to apply for", value: "Annual Leave days" },
  { field: "From", value: "10/03/2022" },
  { field: "To", value: "10/03/2022" },
  { field: "Reason", value: "Preparation for my wedding" },
  {
    field: "While on leave my physical contact will be",
    value: "Entebe kampala",
  },
  { field: "Tel", value: "+25777895623" },
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
            {!isLoading && data && (
              <SimpleGrid columns={2} spacing={1}>
                <h6>Date of Application:</h6>
                <h6>{new Date(data?.advance?.createdAt).toLocaleString()}</h6>
                <h6>Name:</h6>
                <h6>{data?.advance?.user?.full_name}</h6>
                <h6>Designation:</h6>
                <h6>{data?.advance?.project}</h6>
                <h6>I wish to apply for:</h6>
                <h6>{selectedType}</h6>
                <h6>Amount:</h6>
                <h6>{data?.advance?.amount}</h6>
                <h6>Net Pay:</h6>
                <h6>{data?.advance?.net_pay}</h6>
              </SimpleGrid>
            )}
          </div>
        </div>
        <div className={classes.table_wrapper}>
          <h6>Requisition Roles</h6>
          <SummaryTable />
        </div>
        <div className={classes.remarks_wrapper}>
          <h6>
            <strong>Remarks</strong>
          </h6>
          <Textarea placeholder="Type here" />
        </div>

        <div className={classes.form_action_wrapper}>
          <FormButton variant="cancel" type="button">
            Reject
          </FormButton>
          <FormButton variant="save" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Approving..." : "Approve"}
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetails;
