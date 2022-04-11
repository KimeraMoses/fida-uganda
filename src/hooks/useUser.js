import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import {
  getMe,
  logIn,
  signUp,
  forgotPassword,
  setPassword,
  getAllDeactivatedUsers,
  activateUser,
  requestPasswordLink,
} from "../apis/users";
import { USERS_KEY } from "../lib/constants";
import { loginUser } from "../store/authReducer";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation(logIn, {
    onSuccess: (data) => {
      dispatch(loginUser(data));
    },
  });
};

export const useGetMe = () => {
  return useQuery(USERS_KEY, getMe, { enabled: false });
};

export const useSignUp = () => {
  return useMutation(signUp);
};

export const useResetPassword = () => {
  return useMutation(forgotPassword);
};

export const useSetPassword = () => {
  return useMutation(setPassword);
};

export const useDeactivatedUsers = () => {
  return useQuery([USERS_KEY, "DEACTIVATED"], getAllDeactivatedUsers);
};

export const useActivateUser = () => {
  const queryClient = useQueryClient();
  const key = [USERS_KEY, "DEACTIVATED"];
  return useMutation(activateUser, {
    onMutate: async (userId) => {
      await queryClient.cancelMutations(key);
      const prevUsers = queryClient.getQueryData(key);
      if (prevUsers) {
        queryClient.setQueryData(key, (prevUsers) => {
          return produce(prevUsers, (draft) => {
            draft.users.filter((u) => u.id !== userId);
          });
        });
      } else {
        queryClient.setQueryData(key, () => {
          return { users: [] };
        });
      }
    },
    onError: (_error, _userId, context) => {
      queryClient.setQueryData(key, context.prevUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries(key);
    },
  });
};

export const useRequestPasswordLink = () => {
  const queryClient = useQueryClient();
  const key = [USERS_KEY, "DEACTIVATED"];
  return useMutation(requestPasswordLink, {
    onMutate: async (userId) => {
      await queryClient.cancelMutations(key);
      const prevUsers = queryClient.getQueryData(key);
      if (prevUsers) {
        queryClient.setQueryData(key, (prevUsers) => {
          return produce(prevUsers, (draft) => {
            draft.users.filter((u) => u.id !== userId);
          });
        });
      } else {
        queryClient.setQueryData(key, () => {
          return { users: [] };
        });
      }
    },
    onError: (_error, _userId, context) => {
      queryClient.setQueryData(key, context.prevUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries(key);
    },
  });
};
