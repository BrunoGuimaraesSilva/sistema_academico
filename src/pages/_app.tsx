import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ClientProvider, LoadingProvider } from "../services";
import Loading from "./loading";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoadingProvider>
        <ClientProvider>
          <Loading />
          <Component {...pageProps} />
        </ClientProvider>
      </LoadingProvider>
    </ChakraProvider>
  );
}

export default MyApp;
