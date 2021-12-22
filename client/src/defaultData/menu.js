import { CheckCircle, Dashboard, Feedback, Storage, Task } from "@mui/icons-material";

let id = 0;

const menuOptions = {
  dashboard: {
    id: ++id,
    name: "Dashboard",
    icon: <Dashboard />,
  },
  tasks: {
    id: ++id,
    name: "Tasks",
    icon: <Task />,
  },
  approvals: {
    id: ++id,
    name: "Approvals",
    icon: <CheckCircle />,
  },
  members: {
    id: ++id,
    name: "Storage",
    icon: <Storage />,
  },
  allocations: {
    id: ++id,
    name: "Allocations",
    icon: <Feedback />,
  },
};

const usersMenu = {
  membership: [
    menuOptions.dashboard,
    menuOptions.tasks,
    menuOptions.approvals,
    menuOptions.members,
    menuOptions.allocations,
  ],
};

export default usersMenu;
