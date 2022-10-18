import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Head>
          <title>Thanks Friend</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
