import { formatDate } from "../../lib/data";

export const travelOrderColumns = [
  { Headers: "Applicants name", accessor: "applicantsName" },
  { Headers: "Project", accessor: "project" },
  { Headers: "Project activity", accessor: "project_activity" },
  { Headers: "Purpose", accessor: "purpose" },
  { Headers: "Stage", accessor: "stage" },
  { Headers: "Status", accessor: "status" },
  {
    Headers: "Date of application",
    id: "createdAt",
    accessor: (d) => {
      return formatDate(d.createdAt);
    },
  },
];

// export const allocationsColumns = [
//   { Headers: "Recepient (s)", accessor: "recepient" },
//   { Headers: "Date", accessor: "date" },
//   { Headers: "Subject", accessor: "subject" },
//   { Headers: "Purpose", accessor: "purpose" },
//   { Headers: "Stage", accessor: "stage" },
//   { Headers: "Status", accessor: "status" },
// ];
