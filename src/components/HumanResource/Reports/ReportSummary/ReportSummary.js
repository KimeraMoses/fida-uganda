import React from "react";
import classes from "./ReportSummary.module.css";
import { Textarea } from "@chakra-ui/react";
import SummaryTable from "./../../../dashboard/SummaryDetails/SummaryTable/SummaryTable";
import ReportBreadCrumb from "./../BreadCrumb/ReportBreadCrumb";
import Logo from "../../../../assets/images/Avater.png";
import FormButton from "../../../common/UI/FormButton/FormButton";

const ActionCard = ({ action }) => {
  return (
    <div className={classes.card_wrapper}>
      <div
        className={classes.avater_wrapper}
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className={classes.content_wrapper}>
        <div className={classes.name_wrapper}>
          <h4>Kimera Moses</h4>
          <p>22/02/2022</p>
        </div>
        <h6>This is a test message</h6>
      </div>
    </div>
  );
};

const ReportSummaryDetails = (props) => {
  //====GET THE SELECTED DOCUMENT CATEGORY====//
  //   function useQuery() {
  //     return new URLSearchParams(useLocation().search);
  //   }
  //   let query = useQuery();
  //   const selectedType = query.get("application-type");

  return (
    <div className={classes.summary_wrapper}>
      <ReportBreadCrumb
        root="Reports"
        rootLink="/reports"
        folderName={"Folder name"}
        folderLink="/reports/Folder-Name"
        reportName="Report name"
      />
      <div className={classes.summary_details_wrapper}>
        <div className={classes.summary_wrapper_inner}>
          <h2>First Quater Report 2021</h2>

          <div className={classes.user_details}>Report File</div>
        </div>
        <div className={classes.table_wrapper}>
          <h6>Report Approval Roles</h6>
          <SummaryTable />
        </div>
        <div className={classes.remarks_wrapper}>
          <h6>
            <strong>Remarks</strong>
          </h6>
          <ActionCard />
          <ActionCard />
          <ActionCard />
          <Textarea placeholder="Type here" />

          <div className={classes.form_action_wrapper}>
            <FormButton variant="save" type="submit">
              Add remarks
            </FormButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSummaryDetails;
