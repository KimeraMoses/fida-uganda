import React from "react";
import classes from "./SummaryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SimpleGrid, Textarea } from "@chakra-ui/react";
import SummaryTable from "./SummaryTable/SummaryTable";
import { useNavigate } from "react-router-dom";
import FormButton from "../../common/UI/FormButton/FormButton";

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
            : "March Leave Application"}
        </h1>
      </div>
      <div className={classes.summary_details_wrapper}>
        <div className={classes.summary_wrapper_inner}>
          <h2>
            {type === "requisition"
              ? "Requisition Summary"
              : type === "travel"
              ? "Travel Order Summary"
              : "Leave Application Form Summary"}
          </h2>

          <div className={classes.user_details}>
            {userDetails.map((item) => {
              return (
                <SimpleGrid columns={2} spacing={1}>
                  <h6>{item.field}:</h6>
                  <h6>{item.value}</h6>
                </SimpleGrid>
              );
            })}
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
