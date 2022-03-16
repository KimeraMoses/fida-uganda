import ILogin from "../interfaces/Login";
import axios from "axios";
import { routes } from "./routes";

const loginUser = async (values: ILogin) => {
  const response = await axios({
    method: "post",
    url: routes.signIn,
    data: { ...values },
  });
};

export default loginUser;
