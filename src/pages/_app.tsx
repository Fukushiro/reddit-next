import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { setupMirage } from "../utils/mirage/mirage.utils";
import { QueryClientProvider, QueryClient } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  //setupMirage();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
