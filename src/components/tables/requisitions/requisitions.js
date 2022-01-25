export const requisitionColumns = [
  { Header: "Applicants Name", accessor: "applicantName" },
  { Header: "Project", accessor: "projectName" },
  { Header: "Project Activity", accessor: "projectActivity" },
  { Header: "Status", accessor: "status" },
  {
    Header: "Date",
    id: "date",
    accessor: (d) => new Date(d.date).toLocaleDateString(),
  },
];