import React from "react";
import Head from "next/head";
import Header from "../Header";
import { Wrapper } from "./style";

const Layout = ({ children }: any) => (
  <>
    <Head>
      <title>Funny movies</title>
    </Head>
    <Wrapper id="app" data-testid="layout">
      <Header />
      {children}
    </Wrapper>
  </>
);

export default Layout;
