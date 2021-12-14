import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }

    next(action);

    const { url, method, data, withCredentials, onSuccess, onError } =
      action.payload;

    try {
      const response = await axios({
        withCredentials,
        url,
        method,
        data,
      });

      dispatch(actions.apiCallSucceeded(response.data));

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      dispatch(actions.apiCallFailed(error));

      if (onError) {
        dispatch({ type: onError, payload: error });
      }
    }
  };

export default api;
