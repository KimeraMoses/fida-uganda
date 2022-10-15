import { BASE_URL } from './constants';

export const routes = {
  contracts: {
    getContracts: `${BASE_URL}/contracts/getAll`,
    uploadContracts: `${BASE_URL}/contracts/upload`,
  },
  leaveRequests: {
    getLeaveRequests: `${BASE_URL}/leaveRequests/getAll`,
    getLeaveRequest: `${BASE_URL}/leaveRequests`,
    base: `${BASE_URL}/leaveRequests`,
    createLeaveRequest: `${BASE_URL}/leaveRequests/create`,
    approveLeaveRequest: `${BASE_URL}/leaveRequests/approve`,
    rejectLeaveRequest: `${BASE_URL}/leaveRequests/reject`,
    getMyLeaveRequests: `${BASE_URL}/leaveRequests/getMyLeaveDays`,
  },
  membershipActivities: {
    getMembershipActivities: `${BASE_URL}/membershipActivities/getAll`,
    addMembershipActivity: `${BASE_URL}/membershipActivities/create`,
  },
  notifications: {
    addNotification: `${BASE_URL}/notifications/create`,
    getNotifications: `${BASE_URL}/notifications/getAll`,
  },
  itProducts: {
    createItProducts: `${BASE_URL}/it_products/create`,
    getItProducts: `${BASE_URL}/it_products/getAll`,
  },
  itServices: {
    createItService: `${BASE_URL}/services/create`,
    getItServices: `${BASE_URL}/services/getAll`,
  },
  members: {
    addMember: `${BASE_URL}/members/create`,
    getAllMembers: `${BASE_URL}/members/getAll`,
    base: `${BASE_URL}/members`,
    editMember: `${BASE_URL}/members/edit`,
  },
  allocations: {
    getAllocations: `${BASE_URL}/allocations/getAll`,
    createAllocation: `${BASE_URL}/allocations/create`,
    base: `${BASE_URL}/allocations/`,
  },
  approvals: {
    getAllApprovals: `${BASE_URL}/approvals/getAll`,
  },
  users: {
    login: `${BASE_URL}/users/login`,
    signUp: `${BASE_URL}/users/signup`,
    forgotPassword: `${BASE_URL}/users/forgotPassword`,
    getMe: `${BASE_URL}/users/me`,
    setPassword: `${BASE_URL}/users/setPassword`,
    deactivatedUsers: `${BASE_URL}/users/getAllDeactivatedUsers`,
    activateUser: `${BASE_URL}/users/activateAccount`,
    requestPasswordLink: `${BASE_URL}/users/requestSetPassword`,
    updateProfile: `${BASE_URL}/users/updateMe`,
    activatedUsers: `${BASE_URL}/users/getAllActivatedUsers`,
  },
  tasks: {
    addTask: `${BASE_URL}/tasks/create`,
    getAllTasks: `${BASE_URL}/tasks/getAll`,
    base: `${BASE_URL}/tasks`,
    getUserTasks: `${BASE_URL}/tasks/getUserTasks`,
    editTask: `${BASE_URL}/tasks/edit`,
    getTaskComments: `/comments/getAll`,
    getTaskStats: `${BASE_URL}/tasks/getTaskStats`,
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
    addCaseComments: `${BASE_URL}/caseComments/create`,
    baseCaseComment: `${BASE_URL}/caseComments/`,
    getCommentsByCase: `${BASE_URL}/caseComments/getCommentByCase/`,
    editCaseComment: `${BASE_URL}/caseComments/edit/`,
  },
  requisitions: {
    getMyRequisitions: `${BASE_URL}/requisitions/getMyRequisitions`,
    getRequisitions: `${BASE_URL}/requisitions/getAll`,
    addRequisition: `${BASE_URL}/requisitions/create`,
    editRequisition: `${BASE_URL}/requisitions/edit`,
    getPendingRequisitions: `${BASE_URL}/requisitions/getAllPendingRequisitions`,
    getAllApproved: `${BASE_URL}/requisitions/getAllApprovedRequisitions`,
    stats: `${BASE_URL}/requisitions/getStats`,
    number: `${BASE_URL}/requisitions/getRequisitionNumbers`,
    base: `${BASE_URL}/requisitions`,
    approveRequisition: `${BASE_URL}/requisitions/approve`,
    rejectRequisition: `${BASE_URL}/requisitions/reject`,
    getPendingDopRequisitions: `${BASE_URL}/requisitions/getAllPendingDOPRequisitions`,
    getApprovedDopRequisitions: `${BASE_URL}/requisitions/getAllApprovedDOPRequisitions`,
    getRejectedDopRequisitions: `${BASE_URL}/requisitions/getAllRejectedDOPRequisitions`,
    getPendingAccountantRequisitions: `${BASE_URL}/requisitions/getAllPendingAccountantRequisitions`,
    getApprovedAccountantRequisitions: `${BASE_URL}/requisitions/getAllApprovedAccountantRequisitions`,
    getRejectedAccountantRequisitions: `${BASE_URL}/requisitions/getAllRejectedAccountantRequisitions`,
    getPendingCeoRequisitions: `${BASE_URL}/requisitions/getAllPendingCEORequisitions`,
    getApprovedCeoRequisitions: `${BASE_URL}/requisitions/getAllApprovedCEORequisitions`,
    getRejectedCeoRequisitions: `${BASE_URL}/requisitions/getAllRejectedCEORequisitions`,
    getPendingProcurementRequisitions: `${BASE_URL}/requisitions/getAllPendingProcurementRequisitions`,
    getApprovedProcurementRequisitions: `${BASE_URL}/requisitions/getAllApprovedProcurementRequisitions`,
    getRejectedProcurementRequisitions: `${BASE_URL}/requisitions/getAllRejectedProcurementRequisitions`,
  },
  travelOrders: {
    getTravelOrders: `${BASE_URL}/travelOrders/getAll`,
    addTravelOrder: `${BASE_URL}/travelOrders/create`,
    stats: `${BASE_URL}/travelOrders/getTravelOrderNumber`,
    base: `${BASE_URL}/travelOrders`,
    getMyTravelOrders: `${BASE_URL}/travelOrders/getMyTravelOrders`,
    getPendingTravelOrders: `${BASE_URL}/travelOrders/getPendingTravelOrders`,
    getApprovedTravelOrders: `${BASE_URL}/travelOrders/getApprovedTravelOrders`,
    getPendingDopTravelOrders: `${BASE_URL}/travelOrders/getAllPendingDOPTravelOrders`,
    getApprovedDopTravelOrders: `${BASE_URL}/travelOrders/getAllApprovedDOPTravelOrders`,
    getRejectedDopTravelOrders: `${BASE_URL}/travelOrders/getAllRejectedDOPTravelOrders`,
    getPendingAccountantTravelOrders: `${BASE_URL}/travelOrders/getAllPendingAccountantTravelOrders`,
    getApprovedAccountantTravelOrders: `${BASE_URL}/travelOrders/getAllApprovedAccountantTravelOrders`,
    getRejectedAccountantTravelOrders: `${BASE_URL}/travelOrders/getAllRejectedAccountantTravelOrders`,
    getPendingFleetManagerTravelOrders: `${BASE_URL}/travelOrders/getAllPendingFleetManagerTravelOrders`,
    getApprovedFleetManagerTravelOrders: `${BASE_URL}/travelOrders/getAllApprovedFleetManagerTravelOrders`,
    getRejectedFleetManagerTravelOrders: `${BASE_URL}/travelOrders/getAllRejectedFleetManageTravelOrders`,
    editTravelOrder: `${BASE_URL}/travelOrders/edit`,
    approveTravelOrder: `${BASE_URL}/travelOrders/approve`,
    rejectTravelOrder: `${BASE_URL}/travelOrders/reject`,
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
    getAllUsersTrackers: `${BASE_URL}/leaveDaysTracker/getAllUserLeaveTrackers`,
  },
  reports: {
    getReports: `${BASE_URL}/reports/getAll`,
    addReport: `${BASE_URL}/reports/create`,
    base: `${BASE_URL}/reports`,
    getUserReports: `${BASE_URL}/reports/getMyReports`,
    getNarrativeReports: `${BASE_URL}/reports/getNarrativeReports`,
    getStatisticalReports: `${BASE_URL}/reports/getStatisticalReports`,
    getFolderReports: `${BASE_URL}/reports/getFolderReports`,
  },
  reportFolders: {
    addReportFolder: `${BASE_URL}/reportFolders/create`,
    base: `${BASE_URL}/reportFolders`,
    editReportFolder: `${BASE_URL}/reportFolders/edit`,
    getAllReportFolders: `${BASE_URL}/reportFolders/getUserReportFolders`,
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
  fleet: {
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
  services: {
    addService: `${BASE_URL}/services/create`,
    base: `${BASE_URL}/services`,
    editService: `${BASE_URL}/services/edit`,
    getAllServices: `${BASE_URL}/services/getAll`,
  },
  payroll: {
    addPayroll: `${BASE_URL}/payrolls/create`,
    base: `${BASE_URL}/payrolls/`,
    getAllPayrolls: `${BASE_URL}/payrolls/getAll`,
    editPayroll: `${BASE_URL}/payrolls/edit/`,
  },
  payrollNotes: {
    addPayrollNote: `${BASE_URL}/payrollNotes/create`,
    base: `${BASE_URL}/payrollNotes/`,
    getAllPayrollNotes: `${BASE_URL}/payrollNotes/getAll`,
    editPayrollNote: `${BASE_URL}/payrollNotes/edit/`,
  },
  employee: {
    addEmployee: `${BASE_URL}/employees/create`,
    base: `${BASE_URL}/employees/`,
    editEmployee: `${BASE_URL}/employees/edit/`,
    getAllEmployees: `${BASE_URL}/employees/getAll`,
  },
  advances: {
    addAdvance: `${BASE_URL}/advances/create`,
    base: `${BASE_URL}/advances/`,
    editAdvance: `${BASE_URL}/advances/edit/`,
    getAllAdvances: `${BASE_URL}/advances/getAll`,
    approveAdvance: `${BASE_URL}/advances/approve`,
    rejectAdvance: `${BASE_URL}/advances/reject`,
    getMyAdvances: `${BASE_URL}/advances/getMyAdvances`,
  },
};
