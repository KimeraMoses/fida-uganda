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
  reports: {
    id: ++id,
    name: "Reports",
    icon: MdSummarize,
    path: "reports",
  },
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
  fidaIimsApprovals: {
    id: ++id,
    name: "FIDA IIMS Approvals",
    icon: MdStorage,
    path: "fida-ims-approvals",
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
  membership: [...commonOptions],
  humanResources: [...commonOptions, menuOptions.fidaIimsApprovals],
  it: [...commonOptions],
  finance: [...commonOptions],
  me: [
    ...commonOptions,
    menuOptions.fidaProjects,
    menuOptions.fidaDatabases,
    menuOptions.fidaAssets,
    menuOptions.reports,
    menuOptions.fidaIimsApprovals,
  ],
  programs: [
    ...commonOptions,
    menuOptions.fidaProjects,
    menuOptions.fidaDatabases,
    menuOptions.reports,
    menuOptions.fidaIimsApprovals,
  ],
  procurement: [...commonOptions],
  counselor: [...commonOptions],
  fleetManager: [...commonOptions],
  other: [...commonOptions],
};

export default menu;
