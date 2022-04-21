import { useMutation, useQuery, useQueryClient } from "react-query";
import { COMMENTS_KEY, TASKS_KEY } from "../lib/constants";
import {
  addTask,
  addTaskComment,
  deleteTask,
  editTask,
  getAllTasks,
  getTask,
  getTaskComments,
  getTaskStats,
} from "../apis/tasks";
import produce from "immer";
import { useSelector } from "react-redux";

export const useTasks = () => {
  return useQuery(TASKS_KEY, getAllTasks);
};

export const useUserTasks = (userId) => {
  return useQuery([TASKS_KEY, userId], () => getAllTasks(userId));
};

export const useTask = (taskId) => {
  return useQuery([TASKS_KEY, taskId], () => getTask(taskId));
};

export const useTaskComments = (taskId) => {
  return useQuery([TASKS_KEY, taskId, COMMENTS_KEY], () =>
    getTaskComments(taskId)
  );
};

export const useGetTaskStats = () => {
  return useQuery("TASKS_STATS", getTaskStats);
};

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation(addTask, {
    onSuccess: (data) => {
      const previousTasks = queryClient.getQueryData(TASKS_KEY);

      if (previousTasks) {
        queryClient.setQueryData(TASKS_KEY, () => {
          return produce(previousTasks, (draft) => {
            draft.tasks.push(data?.task);
          });
        });
      } else {
        queryClient.setQueryData(TASKS_KEY, () => {
          return { tasks: [data?.task] };
        });
      }
    },
  });
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: (data) => {
      const previousTasks = queryClient.getQueryData(TASKS_KEY);
      if (previousTasks) {
        queryClient.setQueryData(TASKS_KEY, () => {
          return produce(previousTasks, (draft) => {
            const index = draft.tasks.findIndex(
              (task) => task.id === data?.updatedTask.id
            );
            draft.tasks[index] = data?.task;
          });
        });
      } else {
        queryClient.setQueryData(TASKS_KEY, () => {
          return { tasks: [data?.updatedTask] };
        });
      }
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTask, {
    onMutate: async (taskId) => {
      await queryClient.cancelMutations(TASKS_KEY);
      const previousTasks = queryClient.getQueryData(TASKS_KEY);

      if (previousTasks) {
        queryClient.setQueryData(TASKS_KEY, () => {
          return produce(previousTasks, (draft) => {
            draft.tasks.filter((task) => task.id !== taskId);
          });
        });
      }
    },
    onError: (_error, _taskId, context) => {
      queryClient.setQueryData(TASKS_KEY, context.previousTasks);
    },
    onSettled: () => {
      queryClient.invalidateQueries(TASKS_KEY);
    },
  });
};

export const useAddTaskComment = () => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state.auth);
  return useMutation(addTaskComment, {
    onSuccess: (data) => {
      const key = [TASKS_KEY, data.comment.task, COMMENTS_KEY];
      const previousTasks = queryClient.getQueryData(key);
      if (previousTasks) {
        queryClient.setQueryData(key, () => {
          return produce(previousTasks, (draft) => {
            data.comment.createdBy = { ...user };
            draft.comments.push(data?.comment);
          });
        });
      } else {
        queryClient.setQueryData(key, () => {
          return { comments: [data?.comment] };
        });
      }
    },
  });
};
