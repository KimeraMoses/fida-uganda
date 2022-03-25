import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  CASES_KEY,
  CLV_CASES_KEY,
  CLV_CASE_FILE_STATS,
} from "../lib/constants";
import {
  addCaseFile,
  deleteCaseFile,
  getAllCaseFiles,
  getCaseFile,
  getClvCases,
  getClvStats,
  getMyCases,
  updateCaseFile,
} from "../apis/cases";
import produce from "immer";

export const useCaseFiles = () => {
  return useQuery(CASES_KEY, getAllCaseFiles);
};

export const useCaseFile = (caseId) => {
  return useQuery([CASES_KEY, caseId], () => getCaseFile(caseId));
};

export const useClvCases = () => {
  return useQuery(CLV_CASES_KEY, getClvCases);
};

export const useMyCases = () => {
  return useQuery([CLV_CASES_KEY, "MY"], getMyCases);
};

export const useClvStats = () => {
  return useQuery(CLV_CASE_FILE_STATS, getClvStats);
};

export const useAddCaseFiles = () => {
  const queryClient = useQueryClient();
  return useMutation(addCaseFile, {
    onSuccess: (data) => {
      const previousCaseFiles = queryClient.getQueryData(CASES_KEY);
      if (previousCaseFiles) {
        queryClient.setQueryData(CASES_KEY, (previousCaseFiles) => {
          return produce(previousCaseFiles, (draft) => {
            draft.caseFiles.push(data.caseFile);
          });
        });
      } else {
        queryClient.setQueryData(CASES_KEY, () => {
          return { caseFiles: [data.caseFile] };
        });
      }
    },
  });
};

export const useUpdateCaseFile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCaseFile, {
    onSuccess: (data) => {
      const previousCaseFiles = queryClient.getQueryData(CASES_KEY);
      if (previousCaseFiles) {
        queryClient.setQueryData(CASES_KEY, (previousCaseFiles) => {
          return produce(previousCaseFiles, (draft) => {
            const index = draft.caseFiles.findIndex(
              (caseFile) => caseFile.id === data.caseFile.id
            );
            draft.caseFiles[index] = data.caseFile;
          });
        });
      } else {
        queryClient.setQueryData(CASES_KEY, () => {
          return { caseFiles: [data.caseFile] };
        });
      }
    },
  });
};

export const useDeleteCaseFile = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCaseFile, {
    onSuccess: (data) => {
      const previousCaseFiles = queryClient.getQueryData(CASES_KEY);
      if (previousCaseFiles) {
        queryClient.setQueryData(CASES_KEY, (previousCaseFiles) => {
          return produce(previousCaseFiles, (draft) => {
            draft.caseFiles.filter((caseFile) => caseFile.id !== data.caseId);
          });
        });
      } else {
        queryClient.setQueryData(CASES_KEY, () => {
          return { caseFiles: [] };
        });
      }
    },
  });
};
