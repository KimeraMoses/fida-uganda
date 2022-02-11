export const clvDatabaseColumns = [
  { Header: "Name", accessor: "name" },
  {
    Header: "Status",
    id: "isActive",
    accessor: (d) => (d.isActive ? "Active" : "Inactive"),
  },
  { Header: "Email", accessor: "email" },
  { Header: "Profession", accessor: "profession" },
  { Header: "Phone Number", accessor: "phoneNumber" },
  { Header: "Address", accessor: "address" },
  { Header: "City", accessor: "city" },
  {
    Header: "Recruitment Date",
    id: "recruitmentDate",
    accessor: (d) => new Date(d.recruitmentDate).toLocaleString(),
  },
  {
    Header: "Expiry Date",
    id: "expiryDate",
    accessor: (d) => new Date(d.expiryDate).toLocaleString(),
  },
  { Header: "Registered By", accessor: "registeredBy.first_name" },
];
