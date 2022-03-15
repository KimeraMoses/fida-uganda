import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const loginSchema = yup.object().shape({
  email: yup.string().required(`Email ${IS_REQUIRED} `).email(),
  password: yup.string().required(`Password ${IS_REQUIRED} `),
});

export const loginDefaultValues = {
  email: "",
  password: "",
};
