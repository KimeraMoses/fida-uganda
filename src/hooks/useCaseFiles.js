import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  CASES_KEY,
  CLV_CASES_KEY,
  CLV_CASE_FILE_STATS,
} from "../lib/constants";
import {
  addCaseFile,
  deleteCaseFile,
  getCaseFiles,
  getCaseFile,
  getClvCases,
  getCasesStats,
  getMyCases,
  updateCaseFile,
} from "../apis/cases";
import produce from "immer";
import { useDispatch, useSelector } from "react-redux";
import { selectCaseFile } from "../store/caseFileReducer";

export const useCaseFileTemp = () => {
  return useSelector((state) => state.caseFile.caseFile);
};

export const useCaseFiles = () => {
  return useQuery(CASES_KEY, getCaseFiles);
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

export const useCasesStats = () => {
  return useQuery(CLV_CASE_FILE_STATS, getCasesStats);
};

export const useAddCaseFiles = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(addCaseFile, {
    onSuccess: (data) => {
      dispatch(selectCaseFile(data.case_file));
      const previousCaseFiles = queryClient.getQueryData(CASES_KEY);
      const previousClvCaseFiles = queryClient.getQueryData(CLV_CASES_KEY);

      if (!data.case_file.isByClv) {
        if (previousCaseFiles) {
          queryClient.setQueryData(CASES_KEY, (previousCaseFiles) => {
            return produce(previousCaseFiles, (draft) => {
              draft.cases.push(data.case_file);
            });
          });
        } else {
          queryClient.setQueryData(CASES_KEY, () => {
            return { cases: [data.case_file] };
          });
        }
      } else {
        if (previousClvCaseFiles) {
          queryClient.setQueryData(CASES_KEY, (previousClvCaseFiles) => {
            return produce(previousClvCaseFiles, (draft) => {
              draft.cases.push(data.case_file);
            });
          });
        } else {
          queryClient.setQueryData(CASES_KEY, () => {
            return { cases: [data.case_file] };
          });
        }
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
            const index = draft.cases.findIndex(
              (caseFile) => caseFile.id === data.updatedCase.id
            );
            draft.cases[index] = data.updatedCase;
          });
        });
      } else {
        queryClient.setQueryData(CASES_KEY, () => {
          return { cases: [data.updatedCase] };
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
            draft.cases.filter((caseFile) => caseFile.id !== data.caseId);
          });
        });
      } else {
        queryClient.setQueryData(CASES_KEY, () => {
          return { cases: [] };
        });
      }
    },
  });
};
