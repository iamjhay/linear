import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigatorContextProvider } from "../utils/NavigationContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigatorContextProvider>
      <Component {...pageProps} />
    </NavigatorContextProvider>
  );
}

export default MyApp;
