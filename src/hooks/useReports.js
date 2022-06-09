import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addReport,
  getNarrativeReports,
  getReport,
  getReports,
  getStatisticalReports,
  getUserReports,
  updateReport,
} from "../apis/reports";
import { REPORTS_KEY } from "../lib/constants";

export const useReports = (folderId) => {
  return useQuery(REPORTS_KEY, () => getReports(folderId));
};

export const useReport = (reportId) => {
  return useQuery([REPORTS_KEY, reportId], () => getReport(reportId));
};

export const useUserReports = () => {
  return useQuery([REPORTS_KEY, "ME"], getUserReports);
};

export const useNarrativeReports = () => {
  return useQuery([REPORTS_KEY, "NARRATIVE"], getNarrativeReports);
};

export const useStatisticalReports = () => {
  return useQuery([REPORTS_KEY, "STATISTICAL"], getStatisticalReports);
};

export const useAddReport = () => {
  const queryClient = useQueryClient();
  return useMutation(addReport, {
    onSuccess: (data) => {
      const previousReports = queryClient.getQueryData(REPORTS_KEY);
      if (previousReports) {
        queryClient.setQueryData(REPORTS_KEY, (previousReports) => {
          return produce(previousReports, (draft) => {
            draft.reports.push(data.uploaded_report);
          });
        });
      } else {
        queryClient.setQueryData(REPORTS_KEY, () => {
          return { reports: [data.uploaded_report] };
        });
      }
    },
  });
};

export const useUpdateReport = () => {
  const queryClient = useQueryClient();
  return useMutation(updateReport, {
    onSuccess: (data) => {
      const previousReports = queryClient.getQueryData(REPORTS_KEY);
      if (previousReports) {
        queryClient.setQueryData(REPORTS_KEY, (previousReports) => {
          return produce(previousReports, (draft) => {
            const index = draft.reports.findIndex(
              (report) => report.id === data.uploaded_report.id
            );
            draft.reports[index] = data.uploaded_report;
          });
        });
      } else {
        queryClient.setQueryData(REPORTS_KEY, () => {
          return { reports: [data.uploaded_report] };
        });
      }
    },
  });
};

export const useDeleteReport = () => {
  const queryClient = useQueryClient();
  return useMutation(addReport, {
    onMutate: async (reportId) => {
      await queryClient.cancelMutations(REPORTS_KEY);
      const previousReports = queryClient.getQueryData(REPORTS_KEY);
      if (previousReports) {
        queryClient.setQueryData(REPORTS_KEY, (previousReports) => {
          return produce(previousReports, (draft) => {
            draft.reports.filter((report) => report.id !== reportId);
          });
        });
      }
    },
    onError: (_error, _reportId, context) => {
      queryClient.setQueryData(REPORTS_KEY, context.previousReports);
    },
    onSettled: () => {
      queryClient.invalidateQueries(REPORTS_KEY);
    },
  });
};
