import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProjectProgress,
  editProjectProgress,
  getAllProjectProgress,
  getProjectProgress,
  getProjectProgressByProject,
} from "../apis/projectProgress";
import { PROJECT_PROGRESS } from "../lib/constants";

export const useProjectProgress = (projectId) => {
  return useQuery([PROJECT_PROGRESS, projectId], () =>
    getProjectProgress(projectId)
  );
};

export const useAllProjectProgress = () => {
  return useQuery(PROJECT_PROGRESS, getAllProjectProgress);
};

export const useProjectProgressByProject = (projectId) => {
  return useQuery([PROJECT_PROGRESS, "PROJECT", projectId], () =>
    getProjectProgressByProject(projectId)
  );
};

export const useAddProjectProgress = () => {
  const queryClient = useQueryClient();
  return useMutation(addProjectProgress, {
    onSuccess: (data) => {
      const previousProjectProgress =
        queryClient.getQueryData(PROJECT_PROGRESS);

      if (previousProjectProgress) {
        queryClient.setQueryData(
          PROJECT_PROGRESS,
          (previousProjectProgress) => {
            return produce(previousProjectProgress, (draft) => {
              draft.projectProgress.push(data.projectProgress);
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_PROGRESS, () => {
          return { projectProgress: [data.projectProgress] };
        });
      }
    },
  });
};

export const useUpdateProjectProgress = () => {
  const queryClient = useQueryClient();
  return useMutation(editProjectProgress, {
    onSuccess: (data) => {
      const previousProjectProgress =
        queryClient.getQueryData(PROJECT_PROGRESS);

      if (previousProjectProgress) {
        queryClient.setQueryData(
          PROJECT_PROGRESS,
          (previousProjectProgress) => {
            return produce(previousProjectProgress, (draft) => {
              const index = draft.projectProgress.findIndex(
                (projectProgress) =>
                  projectProgress.id === data.projectProgress.id
              );
              draft.projectProgress[index] = data.projectProgress;
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_PROGRESS, () => {
          return { projectProgress: [data.projectProgress] };
        });
      }
    },
  });
};

export const useDeleteProjectProgress = () => {
  const queryClient = useQueryClient();
  return useMutation(PROJECT_PROGRESS, {
    onSuccess: (data) => {
      const previousProjectProgress =
        queryClient.getQueryData(PROJECT_PROGRESS);

      if (previousProjectProgress) {
        queryClient.setQueryData(
          PROJECT_PROGRESS,
          (previousProjectProgress) => {
            return produce(previousProjectProgress, (draft) => {
              draft.projectProgress.filter(
                (projectProgress) =>
                  projectProgress.id !== data.projectProgress.id
              );
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_PROGRESS, () => {
          return { projectProgress: [] };
        });
      }
    },
  });
};
