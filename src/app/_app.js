// src/app/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ValorX</title> {/* This sets the title shown in the browser tab */}
        <meta name="description" content="ValorX - Transforming ideas into captivating digital art." /> {/* This sets the description for SEO */}
        <link rel="icon" href="/favicon.ico" /> {/* Ensure this points to your favicon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
