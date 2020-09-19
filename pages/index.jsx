import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <Header />
        <h1> Recipe</h1>
      </div>
    </>
  );
}
