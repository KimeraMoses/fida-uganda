import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addPatient = async (patient) => {
  return await axiosClient.post(routes.patients.addPatient, patient);
};

export const getPatient = async (patientId) => {
  return await axiosClient.get(`${routes.patients.base}/${patientId}`);
};

export const getPatients = async () => {
  return await axiosClient.get(routes.patients.getAllPatients);
};

export const updatePatient = async (patient) => {
  return await axiosClient.patch(
    `${routes.patients.editPatient}/${patient.id}`,
    patient
  );
};

export const deletePatient = async (patientId) => {
  return await axiosClient.delete(`${routes.patients.base}/${patientId}`);
};
