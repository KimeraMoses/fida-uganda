import { RecentUploadCard } from "../components/HumanResource/EmployeeContract/NewContract/RecentUploads";
import { formatDate } from "./data";

export const clientsTableColumns = [
  {
    Header: "Name",
    subHeader: "Profession",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.name}</strong>
        <div>{value.occupation}</div>
      </>
    ),
  },
  {
    Header: "Phone Number",
    subHeader: "email",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.phoneNumber}</strong>
        <div>{value.email}</div>
      </>
    ),
  },
  {
    Header: "Address",
    subHeader: "city",
    accessor: "address",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.address}</strong>
        <div>{value.city}</div>
      </>
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

export const contractsTableColumn = [
  {
    Header: "Employees Contract",
    accessor: "contract",
    Cell: ({ cell: { value } }) => (
      <RecentUploadCard
        isTable
        name={value?.name}
        time={value?.time}
        size={value?.size}
        fileType={value?.fileType}
        downloadUrl={value?.downloadUrl}
      />
    ),
  },
];

export const travelOrdersTableColumns = [
  {
    Header: "Applicant's Name",
    accessor: "full_name",
  },
  {
    Header: "Project Activity",
    accessor: "project_activity",
  },
  {
    Header: "Purpose",
    accessor: "purpose",
  },
  {
    Header: "Stage",
    accessor: "stage",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Date of Application",
    accessor: "updateAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
];

export const eventsAttendanceTableColumns = [
  {
    Header: "No:",
    accessor: "index",
  },
  {
    Header: "Title of Event",
    accessor: "title",
  },
  {
    Header: "Project",
    accessor: "project",
  },
  {
    Header: "Funder",
    accessor: "funder",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  {
    Header: "Recorded by",
    accessor: "full_name",
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
    Header: "Name",
    subHeader: "Location",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.name}</strong>
        <div>{value.location}</div>
      </>
    ),
  },
  {
    Header: "Category",
    subHeader: "Class",
    accessor: "category",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.category}</strong>
        <div>{value.class}</div>
      </>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <div
        className={`${"allocation_status_wrapper"} ${
          value === "paid" ? "paid" : " fail"
        }`}
      >
        <span className={"status_indicator"}></span>
        <h5>{value}</h5>
      </div>
    ),
  },
  {
    Header: "payment status",
    subHeader: "purchase date",
    accessor: "payment_status",
    Cell: ({ cell: { value } }) => (
      <>
        <div>{value.payment_status}</div>
        <div>{formatDate(value.purchase_date)}</div>
      </>
    ),
  },
  {
    Header: "amount",
    subHeader: "currency",
    accessor: "amount",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.amount}</strong>
        <div>{value.currency}</div>
      </>
    ),
  },
];

export const itServicesColumns = [
  {
    Header: "Name",
    subHeader: "Location",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.name}</strong>
        <div>{value.location}</div>
      </>
    ),
  },
  {
    Header: "Category",
    subHeader: "Class",
    accessor: "category",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.category}</strong>
        <div>{value.class}</div>
      </>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <div
        className={`${"allocation_status_wrapper"} ${
          value.isPaid ? "paid" : " fail"
        }`}
      >
        <span className={"status_indicator"}></span>
        <h5>{value.status}</h5>
      </div>
    ),
  },
  {
    Header: "payment status",
    subHeader: "purchase date",
    accessor: "payment_status",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.payment_status}</strong>
        <div>{formatDate(value.purchase_date)}</div>
      </>
    ),
  },
  {
    Header: "amount",
    subHeader: "currency",
    accessor: "amount",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.amount}</strong>
        <div>{value.currency}</div>
      </>
    ),
  },
];

export const itComplaintsColumns = [
  {
    Header: "Name",
    subHeader: "complainant id",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.id}</strong>
        <div>{value.name}</div>
      </>
    ),
  },
  {
    Header: "date",
    subHeader: "time",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{formatDate(value.date)}</strong>
        <div>
          {new Date(value.date).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </>
    ),
  },
  {
    Header: "subject",
    subHeader: "body",
    accessor: "subject",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.subject}</strong>
        <div>{value.body}</div>
      </>
    ),
  },
  {
    Header: "Status",
    subHeader: "date received",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <>
        <div
          className={`allocation_status_wrapper ${
            value?.status === "read"
              ? " paid"
              : value?.status === "pending"
              ? " balance"
              : " fail"
          }`}
        >
          <span className={"status_indicator"}></span>
          <h5>{value?.status}</h5>
        </div>
        <div style={{ marginTop: 4 }}>{formatDate(value.date_recieved)}</div>
      </>
    ),
  },
];

export const clientFilesColumns = [
  {
    Header: "S/N",
    accessor: "S/N",
  },
  {
    Header: "date of session",
    accessor: "date_of_first_session",
    Cell: ({ cell: { value } }) => <div>{formatDate(value)}</div>,
  },
  { Header: "month", accessor: "month" },
  { Header: "staff/client", accessor: "patient_role" },
  { Header: "mode of communication", accessor: "mode_of_communication" },
  { Header: "patient's name", accessor: "first_name" },
];

export const fleetDatabaseColumns = [
  {
    Header: "S/n",
    accessor: "sn",
    Cell: ({ cell: { value } }) => <div>{value.sn}</div>,
  },
  {
    Header: "Month & Year of consideration",
    accessor: "updateAt",
    Cell: ({ cell: { value } }) => (
      <div>
        <div>{formatDate(value)}</div>
      </div>
    ),
  },
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
  {
    Header: "acquisition date",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => (
      <div>
        <div>{formatDate(value)}</div>
      </div>
    ),
  },
];

export const procurementApprovalTableColumns = [
  { Header: "applicant's name", accessor: "full_name" },
  { Header: "document type", accessor: "doc_type" },
  { Header: "amount", accessor: "amount" },
  { Header: "net pay", accessor: "net_pay" },
  {
    Header: "date of application",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => (
      <div>
        <div>{formatDate(value)}</div>
      </div>
    ),
  },
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
  { Header: "acquisition date", accessor: "date_delivered" },
];

export const payrollNotesTableColumns = [
  {
    Header: "title",
    accessor: "title",
  },
  { Header: "month", accessor: "month" },
  { Header: "year", accessor: "year" },
  {
    Header: "date written",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => <div>{formatDate(value)}</div>,
  },
  {
    Header: "status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <div
        className={`${"data__secondary_text"} ${"notes_status"} ${
          value === "unread" ? "unread" : "read"
        }`}
      >
        <h6>{value === "unread" ? "Unread" : "Read"}</h6>
      </div>
    ),
  },
];
export const fidaProjectsTableColumns = [
  {
    Header: "project name",
    accessor: "name",
  },
  {
    Header: "created by",
    accessor: "createdBy.full_name",
  },
  {
    Header: "last modified",
    accessor: "updateAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  // { Header: "actions", accessor: "name" },
];

export const notificationsTableColumns = [
  {
    Header: "subject",
    accessor: "subject",
  },
  { Header: "purpose of notification", accessor: "message" },
  {
    Header: "date the notification was sent",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  {
    Header: "members to whom the notification was sent",
    accessor: "membersSentNotification",
    Cell: ({ cell: { value } }) => value.name,
  },
];

export const allocationsTableColumns = [
  {
    Header: "subject",
    accessor: "subject",
  },
  { Header: "purpose of notification", accessor: "message" },
  { Header: "date the notification was sent", accessor: "createdAt" },
  {
    Header: "members to whom the notification was sent",
    accessor: "full_name",
  },
];

export const membersTableColumns = [
  {
    Header: "Name",
    subHeader: "membership no.",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.membership_no}</div>
      </div>
    ),
  },
  {
    Header: "phone number",
    subHeader: "email",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.phone}</strong>
        <div>{value.email}</div>
      </div>
    ),
  },
  {
    Header: "membership duration",
    subHeader: "membership fee status",
    accessor: "membership",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.duration}</strong>
        <div>{value.feeStatus.hasPaid ? "Paid" : "Pending"}</div>
      </div>
    ),
  },
];

export const membersActivitiesColumns = [
  {
    Header: "S/N",
    accessor: "sn",
    Cell: ({ cell: { value } }) => (
      <div>
        <div>{value.sn}</div>
      </div>
    ),
  },
  {
    Header: "name",
    subHeader: "membership no.",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.id}</strong>
        <div>{value.membership_number}</div>
      </div>
    ),
  },
  {
    Header: "project",
    subHeader: "project activity",
    accessor: "project",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{value.name}</strong>
        <div>{value.projectActivity}</div>
      </div>
    ),
  },
  {
    Header: "date of activity",
    subHeader: "activity description summary",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{formatDate(value.date)}</strong>
        <div>{value.activityDescription}</div>
      </div>
    ),
  },
];

export const membersAllocationsColumns = [
  {
    Header: "recipient (s)",
    subHeader: "allocations no.",
    accessor: "recipient",
    Cell: ({ cell: { value } }) => (
      <div>
        {value.slice(0, 4).map((recipient, idx) => (
          <div>
            {idx + 1}-{recipient}
          </div>
        ))}{" "}
        {value.length > 4 ? (
          <div
            style={{
              backgroundColor: "#553C9A",
              color: "white",
              width: 90,
              display: "flex",
              justifyContent: "center",
              padding: "2px 3px",
              marginTop: 4,
              borderRadius: "10px",
            }}
          >
            + {value.length - 4} more
          </div>
        ) : (
          <></>
        )}
      </div>
    ),
  },
  {
    Header: "date",
    subHeader: "Time",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <div>
        <strong>{formatDate(value.date)}</strong>
        <div>
          {new Date(value.time).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>
    ),
  },
  {
    Header: "subject",
    subHeader: "body",
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

export const CLVTableColumns = [
  {
    Header: "name",
    subHeader: "profession",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.name}</strong>
        <div>{value.profession}</div>
      </>
    ),
  },
  {
    Header: "phone number",
    subHeader: "email",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.phoneNumber}</strong>
        <div>{value.email}</div>
      </>
    ),
  },
  {
    Header: "address",
    subHeader: "city",
    accessor: "address",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.address}</strong>
        <div>{value.city}</div>
      </>
    ),
  },
  {
    Header: "fida id no.",
    subHeader: "registration date",
    accessor: "idNumber",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.idNumber}</strong>
        <div>{formatDate(value.date)}</div>
      </>
    ),
  },
];

export const legalOfficeColumn = [
  {
    Header: "Name",
    subHeader: "profession",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.name}</strong>
        <div>{value.profession}</div>
      </>
    ),
  },
  {
    Header: "phone number",
    subHeader: "email",
    accessor: "contacts",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.phoneNumber}</strong>
        <div>{value.email}</div>
      </>
    ),
  },
  {
    Header: "address",
    subHeader: "city",
    accessor: "address",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.address}</strong>
        <div>{value.city}</div>
      </>
    ),
  },
  {
    Header: "User Status",
    accessor: "active",
    Cell: ({ cell: { value } }) => (
      <div className={`allocation_status_wrapper ${value ? " paid" : " fail"}`}>
        <span className={"status_indicator"}></span>
        <h5>{value ? "active" : "closed"}</h5>
      </div>
    ),
  },
  {
    Header: "Recruitment date",
    subHeader: "clv expiry",
    accessor: "date",
    Cell: ({ cell: { value } }) => (
      <>
        <strong>{value.date}</strong>
        <div>{value.expDate}</div>
      </>
    ),
  },
];
