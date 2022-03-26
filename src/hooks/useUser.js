import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMe, logIn, signUp } from "../apis/users";
import { USERS_KEY } from "../lib/constants";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(logIn, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      const previousUser = queryClient.getQueryData(USERS_KEY);
      if (!previousUser) {
        queryClient.setQueryData(USERS_KEY, () => {
          return { user: { ...data.user } };
        });
      }
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useQuery(USERS_KEY, () => {}, {
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.setQueryData(USERS_KEY, () => {
        return { user: undefined };
      });
      navigate("/");
    },
    enabled: false,
  });
};

export const useGetMe = () => {
  return useQuery(USERS_KEY, getMe, { enabled: false });
};

export const useSignUp = () => {
  return useMutation(signUp);
};
