import React, { useState } from "react";
import Head from "next/head";

import SearchField from "../components/SearchField";

export default function Search() {
  const [results, setResults] = useState([]);

  async function searchRecipe(query) {
    const response = await fetch("http://localhost:3000/api/recipeSearch", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const parsedResponse = await response.json();
    setResults(parsedResponse.results);
    console.log(parsedResponse);
  }
  return (
    <>
      <Head>
        <title>Recipe Search</title>
      </Head>
      <div>
        <SearchField getSearchValue={searchRecipe} />
        {results.map((result) => {
          return <div>{result.title}</div>;
        })}
      </div>
    </>
  );
}
