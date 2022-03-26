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
    itProducts: {
    id: ++id,
    name: "IT Products",
    icon: MdStorage,
    path: "it-products",
  },
  itServices: {
    id: ++id,
    name: "IT Services",
    icon: MdStorage,
    path: "it-services",
  },
  itComplaints: {
    id: ++id,
    name: "IT Complaints",
    icon: MdStorage,
    path: "it-complaints",
  },
  fleetDatabase: {
    id: ++id,
    name: "Fleet Database",
    icon: MdStorage,
    path: "fleet-database",
  },
  procurements: {
    id: ++id,
    name: "Procurements",
    icon: MdStorage,
    path: "procurements",
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
  humanResources: [...commonOptions],
  it: [...commonOptions,
  menuOptions.itProducts,
  menuOptions.itServices,
  menuOptions.itComplaints
  ],
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
  procurement: [...commonOptions,
  menuOptions.procurements
  ],
  counselor: [...commonOptions,
  menuOptions.caseFiles
  ],
  fleetManager: [...commonOptions,
  menuOptions.fleetDatabase
  ],
  other: [...commonOptions],
};

export default menu;
