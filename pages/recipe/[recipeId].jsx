import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const RecipePage = () => {
  const router = useRouter();
  const { recipeId } = router.query;

  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    (async () => {
      // TODO : Change fetch method to correct info
      const response = await fetch(
        "https://recipes-website-4lzt1os62.vercel.app/api/getRandomRecipe",
        {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify({
          //     recipeId,
          //   }),
        }
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setRecipeInfo(parsedResponse);
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <div>
        <img src={recipeInfo.recipes[0].image} alt="" />
        <h2>{recipeInfo.recipes[0].title}</h2>
        <div>{recipeId}</div>
      </div>
    </>
  );
};

export default RecipePage;
