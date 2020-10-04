import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes Website</title>
      </Head>
      <div>
        <Header />
        <h1>Recipes Website</h1>
      </div>
    </>
  );
}
