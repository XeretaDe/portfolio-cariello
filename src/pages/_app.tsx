import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/MainLayout";
import Header from "../components/GlobalUI/Header";
import ToggleColorMode from "../components/GlobalUI/ToggleColorMode";
import { GlobalLayout } from "../context/UIContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
