import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import {
  ClientProvider,
  LoadingProvider,
  ScreenControlProvider,
  StudantProvider,
} from "../services";
import Loading from "./loading";
import { StudantProviderProps } from "./../services/studantContext.interface";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoadingProvider>
        <ClientProvider>
          <Loading />
          <ScreenControlProvider>
            <StudantProvider>
              <Component {...pageProps} />
            </StudantProvider>
          </ScreenControlProvider>
        </ClientProvider>
      </LoadingProvider>
    </ChakraProvider>
  );
}

export default MyApp;
