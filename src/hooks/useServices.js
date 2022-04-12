import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addService,
  deleteService,
  getService,
  getServices,
  updateService,
} from "../apis/services";
import { SERVICES_KEY } from "../lib/constants";

export const useServices = () => {
  return useQuery(SERVICES_KEY, getServices);
};

export const useService = (serviceId) => {
  return useQuery([SERVICES_KEY, serviceId], () => getService(serviceId));
};

export const useAddService = () => {
  const queryClient = useQueryClient();
  return useMutation(addService, {
    onSuccess: (data) => {
      const previousServices = queryClient.getQueryData(SERVICES_KEY);
      if (previousServices) {
        queryClient.setQueryData(SERVICES_KEY, (previousServices) => {
          return produce(previousServices, (draft) => {
            draft.services.push(data.service);
          });
        });
      } else {
        queryClient.setQueryData(SERVICES_KEY, () => {
          return { services: [data.service] };
        });
      }
    },
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  return useMutation(updateService, {
    onSuccess: (data) => {
      const previousServices = queryClient.getQueryData(SERVICES_KEY);
      if (previousServices) {
        queryClient.setQueryData(SERVICES_KEY, (previousServices) => {
          return produce(previousServices, (draft) => {
            const index = draft.services.findIndex(
              (service) => service.id === data.service.id
            );
            draft.services[index] = data.service;
          });
        });
      } else {
        queryClient.setQueryData(SERVICES_KEY, () => {
          return { services: [data.service] };
        });
      }
    },
  });
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteService, {
    onMutate: async (serviceId) => {
      await queryClient.cancelMutations(SERVICES_KEY);

      const previousServices = queryClient.getQueryData(SERVICES_KEY);
      if (previousServices) {
        queryClient.setQueryData(SERVICES_KEY, (previousServices) => {
          return produce(previousServices, (draft) => {
            draft.services.filter((service) => service.id !== serviceId);
          });
        });
      }
    },
    onError: (_error, _serviceId, context) => {
      queryClient.setQueryData(SERVICES_KEY, context.previousServices);
    },
    onSettled: () => {
      queryClient.invalidateQueries(SERVICES_KEY);
    },
  });
};
