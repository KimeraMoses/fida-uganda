import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addFleet,
  deleteFleet,
  getAllFleets,
  getFleet,
  getFleetByProject,
} from "../apis/fleet";
import { FLEET_MANAGEMENT_KEY } from "../lib/constants";

export const useFleet = (fleetId) => {
  return useQuery([FLEET_MANAGEMENT_KEY, fleetId], getFleet);
};

export const useFleets = () => {
  return useQuery(FLEET_MANAGEMENT_KEY, getAllFleets);
};

export const useFleetByProject = (projectId) => {
  return useQuery(
    [FLEET_MANAGEMENT_KEY, "PROJECT", projectId],
    getFleetByProject
  );
};

export const useAddFleet = () => {
  const queryClient = useQueryClient();
  return useMutation(addFleet, {
    onSuccess: (data) => {
      const previousFleets = queryClient.getQueryData(FLEET_MANAGEMENT_KEY);
      if (previousFleets) {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return produce(previousFleets, (draft) => {
            draft.fleets.push(data?.fleet);
          });
        });
      } else {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return { fleets: [data?.fleet] };
        });
      }
    },
  });
};

export const useUpdateFleet = () => {
  const queryClient = useQueryClient();
  return useMutation(addFleet, {
    onSuccess: (data) => {
      const previousFleets = queryClient.getQueryData(FLEET_MANAGEMENT_KEY);
      if (previousFleets) {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return produce(previousFleets, (draft) => {
            const index = draft.fleets.findIndex(
              (fleet) => fleet.id === data.fleet.id
            );
            draft.fleets[index] = data.fleet;
          });
        });
      } else {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return { fleets: [data?.fleet] };
        });
      }
    },
  });
};

export const useDeleteFleet = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteFleet, {
    onSuccess: (data) => {
      const previousFleets = queryClient.getQueryData(FLEET_MANAGEMENT_KEY);
      if (previousFleets) {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return produce(previousFleets, (draft) => {
            draft.fleets.filter((fleet) => fleet.id !== data.fleet.id);
          });
        });
      } else {
        queryClient.setQueryData(FLEET_MANAGEMENT_KEY, () => {
          return { fleets: [] };
        });
      }
    },
  });
};
