import axios from "axios";
import * as actions from "../api";

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
      headers,
      onStart,
      onSuccess,
      onError,
    } = action.payload;

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
          "Content-Type": "application/json",
          ...headers,
        },
      });

      dispatch(actions.apiCallSucceeded(response.data));

      console.log(response.data);
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
