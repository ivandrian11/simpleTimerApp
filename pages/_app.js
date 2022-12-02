import "../styles/globals.css";
import Head from "next/head";
import { GlobalProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simple Timer App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Simple Timer App" />
        <meta name="keywords" content="Timer, Stopwatch, Countdown" />
        <meta name="author" content="Ivan Andrianto" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500"
          rel="stylesheet"
        />
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
