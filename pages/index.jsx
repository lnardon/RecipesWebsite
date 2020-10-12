import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header />
        <h1>Recipe Website</h1>
      </div>
    </>
  );
}
