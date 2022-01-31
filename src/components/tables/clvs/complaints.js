export const clvComplaintsColumns = [
  { Header: "Subject", accessor: "subject" },
  { Header: "Body", accessor: "body" },
  { Header: "Status", accessor: "status" },
  {
    Header: "Due Date",
    id: "dueDate",
    accessor: (d) => new Date(d.dueDate).toLocaleDateString(),
  },
  { Header: "Submitted by", accessor: "submittedBy" },
  { Header: "Created By", accessor: "createdBy.first_name" },
  {
    Header: "Created At",
    id: "createdAt",
    accessor: (d) => new Date(d.createdAt).toLocaleString(),
  },
];
