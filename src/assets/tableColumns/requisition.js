import { formatDate } from "../../lib/data";

export const requisitionColumns = [
  { Headers: "Project", accessor: "project_name" },
  { Headers: "Item", accessor: "subject_of_procurement" },
  { Headers: "Stage", accessor: "stage" },
  { Headers: "Status", accessor: "status" },
  {
    Headers: "Date of application",
    id: "created_at",
    accessor: (d) => {
      return formatDate(d.createdAt);
    },
  },
];
