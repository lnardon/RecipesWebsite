import Head from "next/head";
import Router from "next/router";

import styles from "./styles.module.css";

export default function Home() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function fetchRandomRecipe() {
    const randomNumber = getRandomInt(1, 1150000);
    Router.push(`/recipe/${randomNumber}`);
  }

  return (
    <>
      <Head>
        <title>Recipeas Website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5501/5501234.png"
            alt="Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Recipeas Website</h1>
        </div>

        <button className={styles.randomBtn} onClick={fetchRandomRecipe}>
          Get Random Recipe
        </button>
      </div>
    </>
  );
}
