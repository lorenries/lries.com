import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "components/Nav";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="font-sans">
      <Head>
        <title>Loren Riesenfeld&apos;s Personal Website</title>
        <meta
          name="description"
          content="Loren Riesenfeld's Personal Website"
        />
        <link
          rel="icon"
          href="/favicon-16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-48.png"
          sizes="48x48"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-62.png"
          sizes="62x62"
          type="image/png"
        />
      </Head>
      <div className="max-w-4xl mx-auto px-3">
        <Nav />
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default App;
