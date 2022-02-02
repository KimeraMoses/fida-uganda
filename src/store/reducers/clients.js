import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    client: null,
    my_clients: null,
    all_clients: null,
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    clientsRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    clientsRequestFailed: (state, action) => {
      const { message } = action.payload;
      state.error = message;
      state.loading = false;
    },
    clientCreated: (state, action) => {
      const { client } = action.payload;
      state.clients.push(client);
      state.loading = false;
      state.success = "Client created successfully";
    },
    clientReceived: (state, action) => {
      const { client } = action.payload;
      state.client = client;
      state.loading = false;
    },
    clientsReceived: (state, action) => {
      const { clients } = action.payload;
      state.clients = clients;
      state.loading = false;
    },
    clientUpdated: (state, action) => {
      const { updatedClient } = action.payload;
      const index = state.clients.findIndex((c) => c.id === updatedClient.id);
      state.clients[index] = updatedClient;
      state.loading = false;
      state.success = "Client updated successfully";
    },
    clientDeleted: (state, action) => {
      const { id } = action.payload;
      const index = state.clients.findIndex((c) => c.id === id);
      state.clients.splice(index, 1);
      state.loading = false;
      state.success = "Client deleted successfully";
    },
    clientsNumberReceived: (state, action) => {
      const { all_clients, my_clients } = action.payload;
      state.all_clients = all_clients;
      state.my_clients = my_clients;
      state.loading = false;
    },
  },
});

export default slice.reducer;
