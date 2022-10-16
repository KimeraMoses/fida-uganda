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

export const allApprovalsTableColumns = [
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "type Of Approval",
    accessor: "doc_type",
  },
  {
    Header: "Approval Status",
    accessor: "status",
  },
  {
    Header: "date Applied",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  {
    Header: "Updated Date",
    accessor: "updateAt",
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

export const itProductsColumns = [
  {
    Header: "Name and Location",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.location}</div>
      </div>
    ),
  },
  {
    Header: "Category and Class",
    accessor: "category",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.category}</strong>
        <div>{value.class}</div>
      </div>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "payment status and purchase date",
    accessor: "payment_status",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.payment_status}</strong>
        <div>{value.purchase_date}</div>
      </div>
    ),
  },
  {
    Header: "amount and currency",
    accessor: "amount",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.amount}</strong>
        <div>{value.currency}</div>
      </div>
    ),
  },
];

export const itServicesColumns = [
  {
    Header: "Name and Location",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.location}</div>
      </div>
    ),
  },
  {
    Header: "Category and Class",
    accessor: "category",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.category}</strong>
        <div>{value.class}</div>
      </div>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "payment status and purchase date",
    accessor: "payment_status",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.payment_status}</strong>
        <div>{value.purchase_date}</div>
      </div>
    ),
  },
  {
    Header: "amount and currency",
    accessor: "amount",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.amount}</strong>
        <div>{value.currency}</div>
      </div>
    ),
  },
];

export const itComplaintsColumns = [
  {
    Header: "Name and complainant id",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.id}</strong>
        <div>{value.name}</div>
      </div>
    ),
  },
  {
    Header: "date and time",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.date}</strong>
        <div>{value.time}</div>
      </div>
    ),
  },
  {
    Header: "subject and body",
    accessor: "subject",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.subject}</strong>
        <div>{value.body}</div>
      </div>
    ),
  },
  {
    Header: "Status and date recieved",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.status}</strong>
        <div>{value.date_recieved}</div>
      </div>
    ),
  },
];


export const clientFilesColumns = [
  { Header: "S/N", accessor: "S/N" },
  { Header: "date of session", accessor: "date_of_first_session" },
  { Header: "month", accessor: "month" },
  { Header: "staff/client", accessor: "patient_role" },
  { Header: "mode of communication", accessor: "mode_of_communication" },
  { Header: "patient's name", accessor: "first_name" },
];

export const fleetDatabaseColumns = [
  { Header: "S/n", accessor: "createdAt" },
  { Header: "Month & Year of consideration", accessor: "updateAt" },
  { Header: "Vehicle Make/Model", accessor: "vehicle_make" },
  { Header: "Vehicle Number", accessor: "vehicle_number" },
  { Header: "Office Location", accessor: "region_of_operation" },
];

export const fidaAssetsColumns = [
  {
    Header: "item",
    accessor: "name",
  },
  { Header: "person in possession", accessor: "person_in_possession" },
  { Header: "location", accessor: "location" },
  { Header: "aquisition date", accessor: "date_delivered" },
];

export const procurementApprovalTableColumns = [
  { Header: "applicant's name", accessor: "full_name" },
  { Header: "document type", accessor: "doc_type" },
  { Header: "amount", accessor: "amount" },
  { Header: "net pay", accessor: "net_pay" },
  { Header: "date of application", accessor: "createdAt" },
  { Header: "budget year", accessor: "budget_year" },
  { Header: "dop approval status", accessor: "DOPApprovalStatus" },
];

export const procurementsTableColumns = [
  {
    Header: "item",
    accessor: "name",
  },
  { Header: "person in possession", accessor: "person_in_possession" },
  { Header: "location", accessor: "location" },
  { Header: "aquisition date", accessor: "date_delivered" },
];

export const payrollNotesTableColumns = [
  {
    Header: "title",
    accessor: "title",
  },
  { Header: "month", accessor: "month" },
  { Header: "year", accessor: "year" },
  { Header: "date written", accessor: "createdAt" },
  { Header: "status", accessor: "status" },
];
export const fidaProjectsTableColumns = [
  {
    Header: "project name",
    accessor: "name",
  },
  // { Header: "created by", accessor: "createdBy.full_name" },
  { Header: "last modified", accessor: "updateAt" },
  // { Header: "actions", accessor: "name" },
];

export const notificationsTableColumns = [
  {
    Header: "subject",
    accessor: "subject",
  },
  { Header: "purpose of notification", accessor: "message" },
  { Header: "date the notification was sent", accessor: "createdAt" },
  { Header: "members to whom the notification was sent", accessor: "full_name" },
]

export const allocationsTableColumns = [
  {
    Header: "subject",
    accessor: "subject",
  },
  { Header: "purpose of notification", accessor: "message" },
  { Header: "date the notification was sent", accessor: "createdAt" },
  { Header: "members to whom the notification was sent", accessor: "full_name" },
]

export const membersTableColumns = [
  {
    Header: "Name and membership no.",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.membership_no}</div>
      </div>
    ),
  },
  {
    Header: "phone number and email",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.phone}</strong>
        <div>{value.email}</div>
      </div>
    ),
  },
  {
    Header: "membership duration and membership fee status",
    accessor: "membership",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.duration}</strong>
        <div>{value.feeStatus}</div>
      </div>
    ),
  },
];

export const membersActivitiesColumns = [
  {
    Header: "S/N",
    accessor: "s/n",
  },
  {
    Header: "name and membership no.",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.id}</strong>
        <div>{value.membership_number}</div>
      </div>
    ),
  },
  {
    Header: "project and project activity",
    accessor: "project",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.time}</div>
      </div>
    ),
  },
  {
    Header: "date of activity and activity description summary",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.date}</strong>
        <div>{value.activityDescription}</div>
      </div>
    ),
  },
];

export const membersAllocationsColumns = [

  {
    Header: "recipient (s) and allocations no.",
    accessor: "recipient",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.email}</strong>
        <div>{value.id}</div>
      </div>
    ),
  },
  {
    Header: "date and time",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.date}</strong>
        <div>{value.time}</div>
      </div>
    ),
  },
  {
    Header: "subject and body",
    accessor: "subject",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.subject}</strong>
        <div>{value.body}</div>
      </div>
    ),
  },
  {
    Header: "status",
    accessor: "status",
  },
];