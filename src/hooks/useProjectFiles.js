import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProjectFile,
  deleteProjectFile, getProjectFile,
  getProjectFiles,
  getProjectFilesByProject,
  updateProjectFile,
} from "../apis/projectFiles";
import { PROJECT_FILES_KEY } from "../lib/constants";

export const useProjectFiles = () => {
  return useQuery(PROJECT_FILES_KEY, getProjectFiles);
};

export const useProjectFile = (projectFileId) => {
  return useQuery([PROJECT_FILES_KEY, projectFileId], () =>
    getProjectFile(projectFileId)
  );
};

export const useProjectFilesByProject = (projectId) => {
  return useQuery([PROJECT_FILES_KEY, "PROJECT", projectId], () =>
    getProjectFilesByProject(projectId)
  );
};

export const useAddProjectFile = () => {
  const queryClient = useQueryClient();
  return useMutation(addProjectFile, {
    onSuccess: (data) => {
      const previousProjectFiles = queryClient.getQueryData(PROJECT_FILES_KEY);
      if (previousProjectFiles) {
        queryClient.setQueryData(PROJECT_FILES_KEY, (previousProjectFiles) => {
          return produce(previousProjectFiles, (draft) => {
            draft.projectFiles.push(data.projectFile);
          });
        });
      } else {
        queryClient.setQueryData(PROJECT_FILES_KEY, () => {
          return { projectFiles: [data.projectFile] };
        });
      }
    },
  });
};

export const useEditProjectFile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProjectFile, {
    onSuccess: (data) => {
      const previousProjectFiles = queryClient.getQueryData(PROJECT_FILES_KEY);
      if (previousProjectFiles) {
        queryClient.setQueryData(PROJECT_FILES_KEY, (previousProjectFiles) => {
          return produce(previousProjectFiles, (draft) => {
            const index = draft.projectFiles.findIndex(
              (projectFile) => projectFile.id === data.projectFile.id
            );
            draft.projectFiles[index] = data.projectFile;
          });
        });
      } else {
        queryClient.setQueryData(PROJECT_FILES_KEY, () => {
          return { projectFiles: [data.projectFile] };
        });
      }
    },
  });
};

export const useDeleteProjectFiles = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProjectFile, {
    onSuccess: (data) => {
      const previousProjectFiles = queryClient.getQueryData(PROJECT_FILES_KEY);
      if (previousProjectFiles) {
        queryClient.setQueryData(PROJECT_FILES_KEY, (previousProjectFiles) => {
          return produce(previousProjectFiles, (draft) => {
            draft.projectFiles.filter(
              (projectFile) => projectFile.id !== data.projectFile.id
            );
          });
        });
      } else {
        queryClient.setQueryData(PROJECT_FILES_KEY, () => {
          return { projectFiles: [] };
        });
      }
    },
  });
};
