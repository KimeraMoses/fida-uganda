import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getMe, logIn, signUp, forgotPassword } from "../apis/users";
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
