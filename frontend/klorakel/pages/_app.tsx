import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Layout from "../components/layout";
import '../styles/globals.css';

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <ThemeProvider theme={theme}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider> */}
    </>
  );
}
