import {
  MdDashboard,
  MdTaskAlt,
  MdStorage,
  MdSummarize,
  MdFeedback,
} from "react-icons/md";

let id = 0;

const menuOptions = {
  dashboard: {
    id: ++id,
    name: "Dashboard",
    icon: MdDashboard,
    path: "/",
  },
  tasks: {
    id: ++id,
    name: "Tasks",
    icon: MdTaskAlt,
    path: "tasks",
  },
  clvDatabase: {
    id: ++id,
    name: "CLV Database",
    icon: MdSummarize,
    path: "clv-database",
  },
  clvComplaints: {
    id: ++id,
    name: "CLV Complaints",
    icon: MdFeedback,
    path: "clv-complaints",
  },
  // reports: {
  //   id: ++id,
  //   name: "Reports",
  //   icon: MdSummarize,
  //   path: "reports",
  // },
  caseFiles: {
    id: ++id,
    name: "Case Files",
    icon: MdStorage,
    path: "case-files",
  },
  fidaProjects: {
    id: ++id,
    name: "FIDA Projects",
    icon: MdStorage,
    path: "fida-projects",
  },
  fidaDatabases: {
    id: ++id,
    name: "FIDA Databases",
    icon: MdStorage,
    path: "fida-databases",
  },
  fidaAssets: {
    id: ++id,
    name: "FIDA Assets",
    icon: MdStorage,
    path: "fida-assets",
  },
  clients: {
    id: ++id,
    name: "Clients",
    icon: MdStorage,
    path: "clients",
  },
  approvals: {
    id: ++id,
    name: "Approvals",
    icon: MdStorage,
    path: "approvals",
  },
  members: {
    id: ++id,
    name: "Members",
    icon: MdStorage,
    path: "members",
  },
  membersActivities: {
    id: ++id,
    name: "Members Activities",
    icon: MdStorage,
    path: "members-activities",
  },
  allocations: {
    id: ++id,
    name: "Allocations",
    icon: MdStorage,
    path: "allocations",
  },
  notifications: {
    id: ++id,
    name: "Notifications",
    icon: MdStorage,
    path: "notifications",
  },
  humanResource_Approvals: {
    id: ++id,
    name: "Approvals",
    icon: MdStorage,
    path: "hr-approvals",
  },
  payRoll: {
    id: ++id,
    name: "PayRoll",
    icon: MdStorage,
    path: "payroll",
  },
  leaveMgt: {
    id: ++id,
    name: "Leave Management",
    icon: MdStorage,
    path: "leave-management",
  },
  employContract: {
    id: ++id,
    name: "Employess & Contracts",
    icon: MdStorage,
    path: "employee-contract",
  },
  fidaAssets_hr: {
    id: ++id,
    name: "Fida Assests",
    icon: MdStorage,
    path: "fida-assets",
  },
  reports: {
    id: ++id,
    name: "Reports",
    icon: MdStorage,
    path: "reports",
  },
};

const commonOptions = [menuOptions.dashboard, menuOptions.tasks];

const menu = {
  clv: [
    ...commonOptions,
    menuOptions.clvDatabase,
    menuOptions.clvComplaints,
    menuOptions.reports,
  ],
  courtProcessServer: [...commonOptions],
  legalAid: [
    ...commonOptions,
    menuOptions.clients,
    menuOptions.caseFiles,
    menuOptions.clvDatabase,
    menuOptions.reports,
  ],
  membership: [
    ...commonOptions,
    menuOptions.approvals,
    menuOptions.members,
    menuOptions.membersActivities,
    menuOptions.allocations,
    menuOptions.notifications,
  ],
  humanResources: [
    ...commonOptions,
    menuOptions.humanResource_Approvals,
    menuOptions.payRoll,
    menuOptions.leaveMgt,
    menuOptions.employContract,
    menuOptions.fidaAssets_hr,
    menuOptions.reports,
  ],
  it: [...commonOptions],
  finance: [...commonOptions],
  me: [
    ...commonOptions,
    menuOptions.fidaProjects,
    menuOptions.fidaDatabases,
    menuOptions.fidaAssets,
    menuOptions.reports,
  ],
  programs: [
    ...commonOptions,
    menuOptions.fidaProjects,
    menuOptions.fidaDatabases,
    menuOptions.reports,
  ],
  procurement: [...commonOptions],
  counselor: [...commonOptions],
  fleetManager: [...commonOptions],
  other: [...commonOptions],
};

export default menu;
