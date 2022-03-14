import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import { SWROptions } from "../data/swrProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={SWROptions}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
