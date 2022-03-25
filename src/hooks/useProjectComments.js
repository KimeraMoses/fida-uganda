import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProjectComment,
  deleteProjectComment,
  getProjectComment,
  getProjectComments,
  updateProjectComment,
} from "../apis/projectComment";
import { PROJECT_COMMENTS_kEY } from "../lib/constants";

export const useProjectComment = (projectCommentId) => {
  return useQuery([PROJECT_COMMENTS_kEY, projectCommentId], () =>
    getProjectComment(projectCommentId)
  );
};

export const useProjectComments = () => {
  return useQuery(PROJECT_COMMENTS_kEY, () => getProjectComments);
};

export const useAddProjectComments = () => {
  const queryClient = useQueryClient();
  return useMutation(addProjectComment, {
    onSuccess: (data) => {
      const previousProjectComments =
        queryClient.getQueryData(PROJECT_COMMENTS_kEY);

      if (previousProjectComments) {
        queryClient.setQueryData(
          PROJECT_COMMENTS_kEY,
          (previousProjectComments) => {
            return produce(previousProjectComments, (draft) => {
              draft.projectComments.push(data.projectComment);
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_COMMENTS_kEY, () => {
          return { projectComments: [data.projectComment] };
        });
      }
    },
  });
};

export const useUpdateProjectComment = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProjectComment, {
    onSuccess: (data) => {
      const previousProjectComments =
        queryClient.getQueryData(PROJECT_COMMENTS_kEY);

      if (previousProjectComments) {
        queryClient.setQueryData(
          PROJECT_COMMENTS_kEY,
          (previousProjectComments) => {
            return produce(previousProjectComments, (draft) => {
              const index = draft.projectComments.findIndex(
                (comment) => comment.id === data.projectComment.id
              );
              draft.projectComments[index] = data.projectComment;
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_COMMENTS_kEY, () => {
          return { projectComments: [data.projectComment] };
        });
      }
    },
  });
};

export const useDeleteProjectComment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProjectComment, {
    onSuccess: (data) => {
      const previousProjectComments =
        queryClient.getQueryData(PROJECT_COMMENTS_kEY);

      if (previousProjectComments) {
        queryClient.setQueryData(
          PROJECT_COMMENTS_kEY,
          (previousProjectComments) => {
            return produce(previousProjectComments, (draft) => {
              draft.projectComments.filter(
                (projectComment) => projectComment.id !== data.projectComment.id
              );
            });
          }
        );
      } else {
        queryClient.setQueryData(PROJECT_COMMENTS_kEY, () => {
          return { projectComments: [] };
        });
      }
    },
  });
};
