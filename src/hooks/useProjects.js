import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProject,
  deleteProject,
  getProject,
  getProjectComments,
  getProjects,
  updateProject,
} from "../apis/projects";
import { PROJECTS_KEY } from "../lib/constants";

export const useProjects = () => {
  return useQuery(PROJECTS_KEY, getProjects);
};

export const useProjectOptions = () => {
  const { data } = useProjects();
  if (data?.projects) {
    return data.projects.map((project) => ({
      label: project.name,
      value: project.id,
    }));
  }
  return [];
};

export const useProject = (projectId) => {
  return useQuery([PROJECTS_KEY, projectId], getProject);
};

export const useProjectComments = (projectId) => {
  return useQuery([PROJECTS_KEY, "COMMENTS", projectId], getProjectComments);
};

export const useAddProject = () => {
  const queryClient = useQueryClient();
  return useMutation(addProject, {
    onSuccess: (data) => {
      const previousProjects = queryClient.getQueryData(PROJECTS_KEY);
      if (previousProjects) {
        queryClient.setQueryData(PROJECTS_KEY, () => {
          return produce(previousProjects, (draft) => {
            draft.projects.push(data.project);
          });
        });
      } else {
        queryClient.setQueryData(PROJECTS_KEY, () => {
          return { projects: [data.project] };
        });
      }
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProject, {
    onSuccess: (data) => {
      const previousProjects = queryClient.getQueryData(PROJECTS_KEY);
      if (previousProjects) {
        queryClient.setQueryData(PROJECTS_KEY, () => {
          return produce(previousProjects, (draft) => {
            const index = draft.projects.findIndex(
              (project) => project.id === data.project.id
            );
            draft.projects[index] = data.project;
          });
        });
      } else {
        queryClient.setQueryData(PROJECTS_KEY, () => {
          return { projects: [data.project] };
        });
      }
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onMutate: async (projectId) => {
      await queryClient.cancelMutations(PROJECTS_KEY);
      const previousProjects = queryClient.getQueryData(PROJECTS_KEY);
      if (previousProjects) {
        queryClient.setQueryData(PROJECTS_KEY, () => {
          return produce(previousProjects, (draft) => {
            draft.projects.filter((project) => project.id !== projectId);
          });
        });
      }
    },
    onError: (_error, _projectId, context) => {
      queryClient.setQueryData(PROJECTS_KEY, context.previousProjects);
    },
    onSettled: () => {
      queryClient.invalidateQueries(PROJECTS_KEY);
    },
  });
};
