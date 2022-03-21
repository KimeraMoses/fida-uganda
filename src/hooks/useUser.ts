import { useMutation, useQuery } from "react-query";
import { getMe, logIn } from "../apis/users";
import { USERS_KEY } from "../lib/constants";

export const useLogin = () => {
  return useMutation(logIn, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const useGetMe = () => {
  return useQuery(USERS_KEY, getMe, { enabled: false });
};
