import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addReportFolder,
  deleteReportFolder,
  getReportFolder,
  getReportFolders,
  updateReportFolder,
} from "../apis/reportFolders";
import { REPORT_FOLDERS } from "../lib/constants";

export const useReportFolders = () => {
  return useQuery(REPORT_FOLDERS, getReportFolders);
};

export const useReportFolder = (reportFolderId) => {
  return useQuery([REPORT_FOLDERS, reportFolderId], () => getReportFolder);
};

export const useAddReportFolder = () => {
  const queryClient = useQueryClient();

  return useMutation(addReportFolder, {
    onSuccess: (data) => {
      const previousReportFolders = queryClient.getQueryData(REPORT_FOLDERS);
      if (previousReportFolders) {
        queryClient.setQueryData(REPORT_FOLDERS, (previousReportFolders) => {
          return produce(previousReportFolders, (draft) => {
            draft.reportFolders.push(data.reportFolder);
          });
        });
      }
    },
  });
};

export const useUpdateReportFolder = () => {
  const queryClient = useQueryClient();

  return useMutation(updateReportFolder, {
    onSuccess: (data) => {
      const previousReportFolders = queryClient.getQueryData(REPORT_FOLDERS);

      if (previousReportFolders) {
        queryClient.setQueryData(REPORT_FOLDERS, (previousReportFolders) => {
          return produce(previousReportFolders, (draft) => {
            const index = draft.reportFolders.findIndex(
              (reportFolder) => reportFolder.id === data.updatedReportFolder.id
            );
            draft.reportFolders[index] = data.updatedReportFolder;
          });
        });
      } else {
        queryClient.setQueryData(REPORT_FOLDERS, () => {
          return { reportFolders: [data.updatedReportFolder] };
        });
      }
    },
  });
};

export const useDeleteReportFolder = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteReportFolder, {
    onMutate: async (reportFolderId) => {
      await queryClient.cancelMutations(REPORT_FOLDERS);
      const previousReportFolders = queryClient.getQueryData(REPORT_FOLDERS);
      if (previousReportFolders) {
        queryClient.setQueryData(REPORT_FOLDERS, (previousReportFolders) => {
          return produce(previousReportFolders, (draft) => {
            draft.reportFolders.filter(
              (reportFolder) => reportFolder.id !== reportFolderId
            );
          });
        });
      }
    },
    onError: (_error, _reportFolderId, context) => {
      queryClient.setQueryData(REPORT_FOLDERS, context.previousReportFolders);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
};
