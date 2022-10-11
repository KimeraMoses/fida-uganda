import { formatDate } from "./data";

export const clientsTableColumns = [
  {
    Header: "Name and Profession",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.occupation}</div>
      </div>
    ),
  },
  {
    Header: "Contacts",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.phoneNumber}</strong>
        <div>{value.email}</div>
      </div>
    ),
  },
  {
    Header: "Address",
    accessor: "address",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.address}</strong>
        <div>{value.city}</div>
      </div>
    ),
  },
  {
    Header: "Registration date",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
];

export const approvalTableColumns = [
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "Sign Up Date",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
];

export const caseColumns = [
  { Header: "File No.", accessor: "case_id" },
  { Header: "Name", accessor: "complainant.name" },
  { Header: "SubCounty", accessor: "complainant.village" },
  // { Header: "District", accessor: "districtOfOrigin" },
  { Header: "Nationality", accessor: "complainant.country" },
  { Header: "NIN", accessor: "complainant.NIN" },
  // { Header: "File type", accessor: "fileType" },
  {
    Header: "Date of opening",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  // { Header: "Case Number", accessor: "caseNumber" },
  { Header: "Gender", accessor: "complainant.sex" },
  { Header: "Age", accessor: "complainant.age" },
  {
    Header: "No. of beneficiaries",
    accessor: "complainant.beneficiaries",
    Cell: ({ cell: { value } }) => value?.length,
  },
  { Header: "Occupation", accessor: "complainant.occupation" },

  { Header: "Nature of problem", accessor: "nature" },
  {
    Header: "Action taken",
    accessor: "actionsTaken",
    Cell: ({ cell: { value } }) => value?.length,
  },
  { Header: "Next visit", accessor: "next_visit" },
  { Header: "Legal Officer", accessor: "legal_officer" },
  { Header: "Referred by", accessor: "referred_to" },
  { Header: "Reason for referral", accessor: "reason_for_referral" },
  { Header: "Follow up feedback", accessor: "follow_up_feedback" },
  {
    Header: "File closing date",
    accessor: "updateAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  { Header: "Phone Number", accessor: "phoneNumber" },
  { Header: "Disability", accessor: "complainantDisability" },
  { Header: "Respondent Name", accessor: "respondentName" },
  { Header: "Respondent Phone Number", accessor: "respondentPhone" },
  { Header: "How did you find fida", accessor: "fida" },
  // {
  //   Header: "Date Uploaded",
  //   accessor: "dateUploaded",
  //   Cell: ({ cell: { value } }) => formatDate(value),
  // },
];
