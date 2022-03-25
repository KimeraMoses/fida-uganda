import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProjectLogFrame,
  deleteProjectLogFrame,
  getProjectLogFrame,
  getProjectLogFrames,
  updateProjectLogFrame,
} from "../apis/projectLogFrames";
import { PROJECT_LOG_FRAMES_KEY } from "../lib/constants";

export const useProjectLogFrames = () => {
  return useQuery(PROJECT_LOG_FRAMES_KEY, getProjectLogFrames);
};

export const useProjectLogFrame = (projectId) => {
  return useQuery([PROJECT_LOG_FRAMES_KEY, projectId], () =>
    getProjectLogFrame(projectId)
  );
};

export const useAddProjectLogFrame = () => {
  const queryClient = useQueryClient();
  return useMutation(addProjectLogFrame, {
    onSuccess: (data) => {
      const previousProjectLogFrames = queryClient.getQueryData(
        PROJECT_LOG_FRAMES_KEY
      );

      if (previousProjectLogFrames) {
        queryClient.setQueryData(
          PROJECT_LOG_FRAMES_KEY,
          (previousProjectLogFrames) => {
            return produce(previousProjectLogFrames, (draft) => {
              draft.projectLogFrames.push(data.projectLogFrame);
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_LOG_FRAMES_KEY, () => {
          return { projectLogFrames: [data.projectLogFrame] };
        });
      }
    },
  });
};

export const useUpdateProjectLogFrame = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProjectLogFrame, {
    onSuccess: (data) => {
      const previousProjectLogFrames = queryClient.getQueryData(
        PROJECT_LOG_FRAMES_KEY
      );

      if (previousProjectLogFrames) {
        queryClient.setQueryData(
          PROJECT_LOG_FRAMES_KEY,
          (previousProjectLogFrames) => {
            return produce(previousProjectLogFrames, (draft) => {
              const index = draft.projectLogFrames.findIndex(
                (projectLogFrame) =>
                  projectLogFrame.id === data.projectLogFrame.id
              );
              draft.projectLogFrames[index] = data.projectLogFrame;
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_LOG_FRAMES_KEY, () => {
          return { projectLogFrames: [data.projectLogFrame] };
        });
      }
    },
  });
};

export const useDeleteProjectLogFrame = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProjectLogFrame, {
    onSuccess: (data) => {
      const previousProjectLogFrames = queryClient.getQueryData(
        PROJECT_LOG_FRAMES_KEY
      );

      if (previousProjectLogFrames) {
        queryClient.setQueryData(
          PROJECT_LOG_FRAMES_KEY,
          (previousProjectLogFrames) => {
            return produce(previousProjectLogFrames, (draft) => {
              draft.projectLogFrames.filter(
                (projectLogFrame) =>
                  projectLogFrame.id !== data.projectLogFrame.id
              );
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_LOG_FRAMES_KEY, () => {
          return { projectLogFrames: [data.projectLogFrame] };
        });
      }
    },
  });
};
