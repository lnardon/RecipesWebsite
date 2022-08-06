import Head from "next/head";
import Router from "next/router";
import { useState } from "react";

import SearchField from "../components/SearchField";
import SearchRecipeCard from "../components/SearchRecipeCard";
import getRandomInt from "../hooks/getRandomInt";
import styles from "./styles.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function searchRecipe(query) {
    setIsLoading(true);
    fetch("/api/recipeSearch", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setIsLoading(false);
      });
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
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="/static/favicon.ico" alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.searchContainer}>
          <SearchField getSearchValue={searchRecipe} />
          <button className={styles.randomBtn} onClick={fetchRandomRecipe}>
            Get Random Recipe
          </button>
          {isLoading && (
            <img
              src="/static/loader.svg"
              alt="Loader"
              className={styles.loader}
            />
          )}
          <div className={styles.searchResults}>
            {results?.map((result) => {
              return (
                <SearchRecipeCard
                  key={result.id}
                  id={result.id}
                  title={result.title}
                  image={result.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
