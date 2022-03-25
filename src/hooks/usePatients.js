import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addPatient,
  deletePatient,
  getPatient,
  getPatients,
  updatePatient,
} from "../apis/patients";
import { PATIENTS_KEY } from "../lib/constants";

export const usePatient = (patientId) => {
  return useQuery([PATIENTS_KEY, patientId], () => getPatient(patientId));
};

export const usePatients = () => {
  return useQuery(PATIENTS_KEY, getPatients);
};

export const useAddPatient = () => {
  const queryClient = useQueryClient();
  return useMutation(addPatient, {
    onSuccess: (data) => {
      const previousPatients = queryClient.getQueryData(PATIENTS_KEY);
      if (previousPatients) {
        queryClient.setQueryData(PATIENTS_KEY, (previousPatients) => {
          return produce(previousPatients, (draft) => {
            draft.patients.push(data.patient);
          });
        });
      } else {
        queryClient.setQueryData(PATIENTS_KEY, () => {
          return { patients: [data.patient] };
        });
      }
    },
  });
};

export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePatient, {
    onSuccess: (data) => {
      const previousPatients = queryClient.getQueryData(PATIENTS_KEY);
      if (previousPatients) {
        queryClient.setQueryData(PATIENTS_KEY, (previousPatients) => {
          return produce(previousPatients, (draft) => {
            const index = draft.patients.findIndex(
              (patient) => patient.id === data.patient.id
            );
            draft.patients[index] = data.patient;
          });
        });
      } else {
        queryClient.setQueryData(PATIENTS_KEY, () => {
          return { patients: [data.patient] };
        });
      }
    },
  });
};

export const useDeletePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePatient, {
    onSuccess: (data) => {
      const previousPatients = queryClient.getQueryData(PATIENTS_KEY);
      if (previousPatients) {
        queryClient.setQueryData(PATIENTS_KEY, (previousPatients) => {
          return produce(previousPatients, (draft) => {
            draft.patients.filter((patient) => patient.id !== data.patient.id);
          });
        });
      } else {
        queryClient.setQueryData(PATIENTS_KEY, () => {
          return { patients: [] };
        });
      }
    },
  });
};
