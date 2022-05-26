import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  addClient,
  deleteClient,
  getAllClients,
  getClientStats,
} from "../apis/clients";
import { CLIENTS_KEY, CLIENT_STATS } from "../lib/constants";
import { selectClient } from "../store/clientReducer";

export const useClientId = () => {
  return useSelector((state) => state.client.client);
};

export const useClients = () => {
  return useQuery(CLIENTS_KEY, getAllClients);
};

export const useClientsDetails = () => {
  const { data } = useClients();

  return data?.clients.map((client) => {
    return { id: client.id, name: client.name };
  });
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
    ...client,
    id: client.id,
    name: client.name,
  }));
};

export const useAddClient = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(addClient, {
    onSuccess: (data) => {
      dispatch(selectClient(data.client.id));
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
