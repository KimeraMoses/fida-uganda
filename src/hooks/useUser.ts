import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMe, logIn } from "../apis/users";
import { IUserIsLogged } from "../interfaces/User";
import { USERS_KEY } from "../lib/constants";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(logIn, {
    onSuccess: (data, ) => {
      localStorage.setItem("token", data.token);
      const previousUser = queryClient.getQueryData<IUserIsLogged | undefined>(
        USERS_KEY
      );
      if (!previousUser) {
        queryClient.setQueryData<IUserIsLogged>(USERS_KEY, () => {
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
