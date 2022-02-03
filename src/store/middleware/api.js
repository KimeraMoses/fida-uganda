import axios from "axios";
import * as actions from "../api";
import { APP_PREFIX } from "../../hooks/useLocalStorage";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }

    const {
      url,
      method,
      data,
      withCredentials,
      contentType,
      headers,
      onStart,
      onSuccess,
      onError,
    } = action.payload;

    const token = localStorage.getItem(`${APP_PREFIX}token`);
    const Authorization = token ? `Bearer ${token}` : null;

    if (onStart) {
      dispatch({ type: onStart });
    }
    next(action);

    try {
      const response = await axios({
        baseURL: "https://fida-ims-staging.herokuapp.com",
        withCredentials,
        url,
        method,
        data,
        headers: {
          "Content-Type": contentType || "application/json",
          Authorization,
          ...headers,
        },
      });

      dispatch(actions.apiCallSucceeded(response.data));

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));

      if (onError) {
        dispatch({ type: onError, payload: error.response.data });
      }
    }
  };

export default api;
