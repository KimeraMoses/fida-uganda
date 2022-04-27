import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addClient,
  deleteClient,
  getAllClients,
  getClientStats,
} from "../apis/clients";
import { CLIENTS_KEY, CLIENT_STATS } from "../lib/constants";

export const useClients = () => {
  return useQuery(CLIENTS_KEY, getAllClients);
};

export const useClient = (clientId) => {
  return useQuery([CLIENTS_KEY, clientId], () => getAllClients(clientId));
};

export const useClientStats = () => {
  return useQuery([CLIENTS_KEY, CLIENT_STATS], getClientStats);
};

export const useClientOptions = () => {
  const { data } = useClients();
  return data?.clients.map((client) => ({
    value: client.id,
    label: client.name,
  }));
};

export const useAddClient = () => {
  const queryClient = useQueryClient();
  return useMutation(addClient, {
    onSuccess: (data) => {
      const previousClients = queryClient.getQueryData(CLIENTS_KEY);
      if (previousClients) {
        queryClient.setQueryData(CLIENTS_KEY, (previousClients) => {
          return produce(previousClients, (draft) => {
            draft.clients.push(data?.client);
          });
        });
      } else {
        queryClient.setQueryData(CLIENTS_KEY, () => {
          return { clients: [data?.clv] };
        });
      }
    },
  });
};

export const useUpdateClient = () => {
  const queryClient = useQueryClient();
  return useMutation(addClient, {
    onSuccess: (data) => {
      const previousClients = queryClient.getQueryData(CLIENTS_KEY);
      if (previousClients) {
        queryClient.setQueryData(CLIENTS_KEY, (previousClients) => {
          return produce(previousClients, (draft) => {
            const index = draft.clients.findIndex(
              (client) => client.id === data?.client.id
            );
            draft.clients[index] = data?.client;
          });
        });
      } else {
        queryClient.setQueryData(CLIENTS_KEY, () => {
          return { clients: [data?.clv] };
        });
      }
    },
  });
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClient, {
    onSuccess: (data) => {
      const previousClients = queryClient.getQueryData(CLIENTS_KEY);
      if (previousClients) {
        queryClient.setQueryData(CLIENTS_KEY, (previousClients) => {
          return produce(previousClients, (draft) => {
            draft.clients.filter((client) => client.id !== data?.client.id);
          });
        });
      } else {
        queryClient.setQueryData(CLIENTS_KEY, () => {
          return { clients: [] };
        });
      }
    },
  });
};
