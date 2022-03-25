import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addPatient = async (patient) => {
  return axiosClient.post(routes.patients.addPatient, patient);
};

export const getPatient = async (patientId) => {
  return axiosClient.get(`${routes.patients.base}/${patientId}`);
};

export const getPatients = async () => {
  return axiosClient.get(routes.patients.getAllPatients);
};

export const updatePatient = async (patient) => {
  return axiosClient.patch(
    `${routes.patients.editPatient}/${patient.id}`,
    patient
  );
};

export const deletePatient = async (patientId) => {
  return axiosClient.delete(`${routes.patients.base}/${patientId}`);
};
