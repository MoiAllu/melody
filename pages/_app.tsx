import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import "reset-css";
import Layout from "../components/playerLayout";
import { store } from "../lib/store";

const StoreProviderOverrider = StoreProvider as any;
const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#5E5E5E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      varaints: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProviderOverrider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        )}
      </StoreProviderOverrider>
    </ChakraProvider>
  );
}

export default MyApp;
