import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./ThemeColors/ThemeColors.css";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./store/store";
import theme from "./ThemeColors/Theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
