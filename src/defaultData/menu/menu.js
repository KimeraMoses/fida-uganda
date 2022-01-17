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
    menuOptions.caseFiles,
    menuOptions.clvDatabase,
    menuOptions.reports,
  ],
  membership: [...commonOptions],
  humanResources: [...commonOptions],
  it: [...commonOptions],
  finance: [...commonOptions],
  me: [...commonOptions],
  programs: [
    ...commonOptions,
    menuOptions.reports,
    menuOptions.fidaProjects,
    menuOptions.fidaDatabases,
  ],
  procurement: [...commonOptions],
  counselor: [...commonOptions],
  fleetManager: [...commonOptions],
  other: [...commonOptions],
};

export default menu;
