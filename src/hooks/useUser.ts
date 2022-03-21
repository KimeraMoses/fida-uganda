import { useMutation } from "react-query";
import { logIn } from "../apis/users";

export const useLogin = () => {
  return useMutation(logIn, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};
