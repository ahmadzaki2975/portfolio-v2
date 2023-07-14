import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ahmad Zaki</title>
        <link rel="icon" href="/Z-Logo-2 1.png" />
      </Head>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  );
}
