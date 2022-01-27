// create an array of dummy data
// each object in the array has the following properties:
//   - id: a unique id for the object
//   - applicantName: a string
//   - projectName: a string
//   - projectActivity: a string
//   - status: a string
//   - date: a string

export const dummyDataRequisitions = [
  {
    id: 1,
    applicantName: "John Doe",
    projectName: "Project 1",
    projectActivity: "Activity 1",
    status: "Pending",
    date: "2020-01-01",
  },
  {
    id: 2,
    applicantName: "Jane Doe",
    projectName: "Project 2",
    projectActivity: "Activity 2",
    status: "Approved",
    date: "2020-01-02",
  },
  {
    id: 3,
    applicantName: "John Doe",
    projectName: "Project 3",
    projectActivity: "Activity 3",
    status: "Approved",
    date: "2020-01-03",
  },
];

export const dummyDataTravel = [
  {
    id: 1,
    applicantName: "John Doe",
    projectName: "DFG",
    projectActivity: "Activity 1",
    status: "Pending",
    dateOfTravel: "2020-01-01",
  },
  {
    id: 2,
    applicantName: "Jane Doe",
    projectName: "DFG",
    projectActivity: "Activity 2",
    status: "Approved",
    dateOfTravel: "2020-01-02",
  },
  {
    id: 3,
    applicantName: "John Doe",
    projectName: "DFG",
    projectActivity: "Activity 3",
    status: "Approved",
    dateOfTravel: "2020-01-03",
  },
  {
    id: 4,
    applicantName: "Jane Doe",
    projectName: "DFG",
    projectActivity: "Activity 4",
    status: "Approved",
    dateOfTravel: "2020-01-04",
  },
];

export const dummyDataProgressSummary = [
  {
    id: 1,
    projectName: "Project 1",
    funder: "Funder 1",
    progress: "10%",
    moneySpent: 100000,
    balance: 100000,
  },
];
