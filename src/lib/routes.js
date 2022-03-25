import { BASE_URL } from "./constants";

export const routes = {
  users: {
    login: `${BASE_URL}/users/login`,
    signUp: `${BASE_URL}/users/signup`,
    forgotPassword: `${BASE_URL}/users/forgotPassword`,
    getMe: `${BASE_URL}/users/me`,
  },
  tasks: {
    addTask: `${BASE_URL}/tasks/create`,
    getAllTasks: `${BASE_URL}/tasks/getAll`,
    base: `${BASE_URL}/tasks`,
    getUserTasks: `${BASE_URL}/tasks/getUserTasks`,
    editTask: `${BASE_URL}/tasks/edit`,
    getTaskComments: `/comments/getAll`,
  },
  clvs: {
    base: `${BASE_URL}/clvs`,
    addClv: `${BASE_URL}/clvs/create`,
    getClvs: `${BASE_URL}/clvs/getAll`,
    editClv: `${BASE_URL}/clvs/edit`,
    stats: `${BASE_URL}/clvs/getClientNumber`,
  },
  complaints: {
    addComplaint: `${BASE_URL}/complaints/create`,
    base: `${BASE_URL}/complaints`,
    getComplaints: `${BASE_URL}/complaints/getAll`,
    editComplaint: `${BASE_URL}/complaints/edit`,
    stats: `${BASE_URL}/complaints/getComplaintNumber`,
  },
  comments: {
    base: `${BASE_URL}/comments`,
    addComment: `${BASE_URL}/comments/create`,
    getComments: `${BASE_URL}/comments/getAll`,
    editComment: `${BASE_URL}/comments/edit`,
  },
  registration: {
    base: `${BASE_URL}/registration`,
    getDistricts: `${BASE_URL}/registration/getAllDistricts`,
    getAllCounties: `${BASE_URL}/registration/getAllCounties`,
    getDistrict: `${BASE_URL}/registration/getDistrict`,
    getCounty: `${BASE_URL}/registration/getCounty`,
    getDistrictSubCounty: `${BASE_URL}/registration/getDistrictCounties`,
  },
  clients: {
    getClients: `${BASE_URL}/clients/getAll`,
    addClient: `${BASE_URL}/clients/create`,
    base: `${BASE_URL}/clients`,
    editClient: `${BASE_URL}/clients/edit`,
    stats: `${BASE_URL}/clients/getClientNumber`,
  },
  cases: {
    getCaseFiles: `${BASE_URL}/cases/getAll`,
    addCaseFile: `${BASE_URL}/cases/create`,
    editCaseFile: `${BASE_URL}/cases/edit`,
    base: `${BASE_URL}/cases`,
    stats: `${BASE_URL}/cases/getCasesNumber`,
    getMyCases: `${BASE_URL}/cases/getMyCases`,
    getClvCases: `${BASE_URL}/cases/getClvCases`,
  },
  requisitions: {
    getRequisitions: `${BASE_URL}/requisitions/getAll`,
    addRequisition: `${BASE_URL}/requisitions/create`,
    editRequisition: `${BASE_URL}/requisitions/edit`,
    getPendingRequisitions: `${BASE_URL}/requisitions/getAllPendingRequisitions`,
    getAllApproved: `${BASE_URL}/requisitions/getAllApprovedRequisitions`,
    stats: `${BASE_URL}/requisitions/getStats`,
    number: `${BASE_URL}/requisitions/getRequisitionNumbers`,
    base: `${BASE_URL}/requisitions`,
  },
  travelOrders: {
    getTravelOrders: `${BASE_URL}/travelOrders/getAll`,
    addTravelOrder: `${BASE_URL}/travelOrders/create`,
    stats: `${BASE_URL}/travelOrders/getTravelOrderNumber`,
    base: `${BASE_URL}/travelOrders`,
    getMyTravelOrders: `${BASE_URL}/travelOrders/getMyTravelOrders`,
    getPendingTravelOrders: `${BASE_URL}/travelOrders/getPendingTravelOrders`,
    getApprovedTravelOrders: `${BASE_URL}/travelOrders/getApprovedTravelOrders`,
    editTravelOrder: `${BASE_URL}/travelOrders/edit`,
  },
  projects: {
    getProjects: `${BASE_URL}/projects/getAll`,
    addProject: `${BASE_URL}/projects/create`,
    editProject: `${BASE_URL}/projects/edit`,
    base: `${BASE_URL}/projects`,
    getProjectComments: `/comments/getAll`,
  },
  databases: {
    getDatabases: `${BASE_URL}/databases/getAll`,
  },
  assets: {
    getAssets: `${BASE_URL}/assets/getAll`,
    addAsset: `${BASE_URL}/assets/create`,
    editAsset: `${BASE_URL}/assets/edit`,
    base: `${BASE_URL}/assets`,
    getDepartmentAssets: `${BASE_URL}/assets/getByDept`,
  },
  leaveTracker: {
    addTracker: `${BASE_URL}/leaveDaysTracker/create`,
    base: `${BASE_URL}/leaveDaysTracker`,
    editTracker: `${BASE_URL}/leaveDaysTracker/edit`,
    getAllTrackers: `${BASE_URL}/leaveDaysTracker/getAll`,
    getUserTrackers: `${BASE_URL}/leaveDaysTracker/getMyLeaveDays`,
    getRemainingDays: `${BASE_URL}/leaveDaysTracker/getDaysLeft`,
    getLeaveDaysRequest: `${BASE_URL}/leaveDaysTracker/getLeaveNumber`,
  },
  reports: {
    getReports: `${BASE_URL}/reports/getAll`,
    addReport: `${BASE_URL}/reports/create`,
    base: `${BASE_URL}/reports`,
    getUserReports: `${BASE_URL}/reports/getMyReports`,
    getNarrativeReports: `${BASE_URL}/reports/getNarrativeReports`,
    getStatisticalReports: `${BASE_URL}/reports/getStatisticalReports`,
  },
  projectFiles: {
    addProjectFile: `${BASE_URL}/projectFiles/create`,
    base: `${BASE_URL}/projectFiles`,
    getAllProjectFiles: `${BASE_URL}/projectFiles/getAll`,
    editProjectFile: `${BASE_URL}/projectFiles/edit`,
    getFilesByProject: `${BASE_URL}/projectFiles/getAllByProject`,
  },
  projectLogFrames: {
    addProjectLogFrame: `${BASE_URL}/projectLogFrames/create`,
    base: `${BASE_URL}/projectLogFrames`,
    editProjectLogFrame: `${BASE_URL}/projectLogFrames/edit`,
    getAllProjectLogFrames: `${BASE_URL}/projectLogFrames/getAll`,
  },
  projectComments: {
    addProjectComment: `${BASE_URL}/projectComments/create`,
    base: `${BASE_URL}/projectComments`,
    editProjectComment: `${BASE_URL}/projectComments/edit`,
    getAllProjectComments: `${BASE_URL}/projectComments/getAll`,
  },
  projectProgress: {
    addProjectProgress: `${BASE_URL}/projectProgress/create`,
    base: `${BASE_URL}/projectProgress`,
    editProjectProgress: `${BASE_URL}/projectProgress/edit`,
    getAllProjectProgress: `${BASE_URL}/projectProgress/getAll`,
    getProgressByProject: `${BASE_URL}/projectProgress/getByProject`,
  },
  fleetManagement: {
    addFleet: `${BASE_URL}/fleets/create`,
    base: `${BASE_URL}/fleets`,
    editFleet: `${BASE_URL}/fleets/edit`,
    getAllFleets: `${BASE_URL}/fleets/getAll`,
    getFleetByProject: `${BASE_URL}/fleets/getByProject`,
  },
  patients: {
    addPatient: `${BASE_URL}/patients/create`,
    base: `${BASE_URL}/patients`,
    editPatient: `${BASE_URL}/patients/edit`,
    getAllPatients: `${BASE_URL}/patients/getAll`,
  },
  events: {
    addEvent: `${BASE_URL}/events/create`,
    base: `${BASE_URL}/events`,
    editEvent: `${BASE_URL}/events/edit`,
    getAllEvents: `${BASE_URL}/events/getAll`,
    getNumberOfAttendees: `${BASE_URL}/events/getEventsAttendees`,
  },
};
