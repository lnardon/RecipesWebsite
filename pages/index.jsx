import Head from "next/head";
import Router from "next/router";

import Header from "../components/Header";

export default function Home() {
  function fetchRandomRecipe() {
    fetch("/api/getRandomRecipe")
      .then((res) => res.json())
      .then((data) => {
        Router.push(`/recipe/${data.recipes[0].id}`);
      });
  }
  return (
    <>
      <Head>
        <title>ReciPeas Website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header />
        <h1>ReciPeas Website</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5501/5501234.png"
          alt="Logo"
        />
        <button onClick={fetchRandomRecipe}>Get Random Recipe</button>
      </div>
    </>
  );
}
