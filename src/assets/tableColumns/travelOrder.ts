import { formatDate } from "../../lib/data";
import { ITravelOrder } from "../../interfaces/TravelOrder";

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
    accessor: (d: ITravelOrder) => {
      return formatDate(d.createdAt);
    },
  },
];
