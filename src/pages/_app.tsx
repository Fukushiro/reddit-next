import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { setupMirage } from "../utils/mirage/mirage.utils";

export default function App({ Component, pageProps }: AppProps) {
  setupMirage();
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
