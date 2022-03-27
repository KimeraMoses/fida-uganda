import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addProjectLogFrame = async (projectLogFrame) => {
  return await axiosClient.post(
    routes.projectLogFrames.addProjectLogFrame,
    projectLogFrame
  );
};

export const getProjectLogFrame = async (projectLogFrameId) => {
  return await axiosClient.get(
    `${routes.projectLogFrames.base}/${projectLogFrameId}`
  );
};

export const getProjectLogFrames = async () => {
  return await axiosClient.get(routes.projectLogFrames.getAllProjectLogFrames);
};

export const updateProjectLogFrame = async (projectLogFrame) => {
  return await axiosClient.patch(
    `${routes.projectLogFrames.editProjectLogFrame}/${projectLogFrame.id}`,
    projectLogFrame
  );
};

export const deleteProjectLogFrame = async (projectLogFrameId) => {
  return await axiosClient.delete(
    `${routes.projectLogFrames.base}/${projectLogFrameId}`
  );
};
