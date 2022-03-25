import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../apis/comments";
import { COMMENTS_KEY } from "../lib/constants";

export const useComment = (commentId) => {
  return useQuery([COMMENTS_KEY, commentId], () => getComment(commentId));
};

export const useComments = () => {
  return useQuery(COMMENTS_KEY, getComments);
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: (data) => {
      const previousComments = queryClient.getQueryData(COMMENTS_KEY);

      if (previousComments) {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return produce(previousComments, (draft) => {
            draft.comments.push(data?.comment);
          });
        });
      } else {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return { comments: [data?.comment] };
        });
      }
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  return useMutation(updateComment, {
    onSuccess: (data) => {
      const previousComments = queryClient.getQueryData(COMMENTS_KEY);

      if (previousComments) {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return produce(previousComments, (draft) => {
            const index = draft.comments.findIndex(
              (comment) => comment.id === data?.comment.id
            );
            draft.comments[index] = data?.comment;
          });
        });
      } else {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return { comments: [data?.comment] };
        });
      }
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteComment, {
    onSuccess: (data) => {
      const previousComments = queryClient.getQueryData(COMMENTS_KEY);

      if (previousComments) {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return produce(previousComments, (draft) => {
            draft.comments = draft.comments.filter((comment) => {
              return comment.id !== data?.commentId;
            });
          });
        });
      } else {
        queryClient.setQueryData(COMMENTS_KEY, () => {
          return { comments: [] };
        });
      }
    },
  });
};
