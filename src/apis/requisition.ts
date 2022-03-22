import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";
import {
  IRequisitionCreate,
  IRequisitionGetAll,
  IRequisitionGetOne,
  IRequisitionStats,
} from "../interfaces/Requisition";

export const getAllRequisitions = async (): Promise<IRequisitionGetAll> => {
  return await axiosClient.get(routes.requisitions.getRequisitions);
};

export const getRequisitionsStats = async (): Promise<IRequisitionStats> => {
  return await axiosClient.get(routes.requisitions.stats);
};

export const addRequisition = async (
  values: IRequisitionCreate
): Promise<IRequisitionGetOne> => {
  return await axiosClient.post(routes.requisitions.addRequisition, values);
};
