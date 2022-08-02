import { useState } from 'react';
import produce from 'immer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMe,
  logIn,
  signUp,
  forgotPassword,
  setPassword,
  getAllDeactivatedUsers,
  activateUser,
  requestPasswordLink,
  updateProfile,
  getAllActivatedUsers,
} from '../apis/users';
import { USERS_KEY } from '../lib/constants';
import { loginUser } from '../store/authReducer';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useOnlineStatus from './useOnlineStatus';

export const useUser = () => {
  return useSelector((state) => state.auth.user);
};

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation(logIn, {
    onSuccess: (data) => {
      dispatch(loginUser(data));
    },
  });
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();

  return useMutation(updateProfile, {
    onSuccess: (data) => {
      dispatch(loginUser(data));
    },
  });
};

const networkStatus = {
  loading: 'loading',
  success: 'success',
  error: 'error',
  idle: 'idle',
};

export const useGetMe = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState(networkStatus.idle);
  const isOnline = useOnlineStatus();
  const dispatch = useDispatch();

  const isLoadingOne = status === networkStatus.loading;
  const isLoading = isLoadingOne;

  const getUserToken = async () => {
    const token = await localStorage.getItem('token');
    return token;
  };

  useEffect(() => {
    setStatus(networkStatus.loading);
    getUserToken().then((userToken) => {
      if (userToken) {
        setToken(userToken);
        getMe()
          .then((userData) => {
            setUser(userData);
            dispatch(loginUser(userData));
            setStatus(networkStatus.success);
          })
          .catch(() => {
            setUser(null);
            setStatus(networkStatus.error);
          });
      } else {
        setUser(null);
        setStatus(networkStatus.error);
      }
    });
  }, [token, dispatch]);

  useEffect(() => {
    if (!isOnline) {
      toast('You are offline. Please connect to the internet to continue.');
    }
  });

  return { user, status, isLoading, setUser };
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
  return useQuery([USERS_KEY, 'DEACTIVATED'], getAllDeactivatedUsers);
};

export const useActivatedUsers = () => {
  return useQuery([USERS_KEY, 'ACTIVATED'], getAllActivatedUsers);
};

export const useUsers = () => {
  const { data } = useActivatedUsers();
  if (data?.users) {
    return data?.users.map((user) => ({
      ...user,
      id: user.id,
      name: user.full_name,
    }));
  }
  return [];
};

export const useActivateUser = () => {
  const queryClient = useQueryClient();
  const key = [USERS_KEY, 'DEACTIVATED'];
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
  const key = [USERS_KEY, 'DEACTIVATED'];
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
