import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
