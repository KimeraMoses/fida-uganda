export const approvalColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Designation", accessor: "designation" },
  { Header: "Project of attachment", accessor: "project" },
  {
    Header: "Sign Up Date",
    id: "createdAt",
    accessor: (d) => new Date(d.createdAt).toLocaleDateString(),
  },
];
