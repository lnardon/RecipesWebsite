import { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";

import RecipePageHeader from "../../components/RecipePageHeader";

function RecipePage() {
  const router = useRouter();
  const { recipeId } = router.query;

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://recipes-website.lnardon.vercel.app/api/getRecipeInfo",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: recipeId,
        }
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setRecipe(parsedResponse);
    })();
  }, []);

  function createMarkup() {
    return {
      __html: recipe.instructions,
    };
  }
  return (
    <>
      <Head>
        <title>NRD Recipes - {recipe.title}</title>
      </Head>
      <div>
        <h4
          onClick={() => Router.back("/search")}
          style={{ cursor: "pointer" }}
        >
          back
        </h4>
        <RecipePageHeader
          image={recipe.image}
          title={recipe.title}
          summary={recipe.summary}
        />
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </>
  );
}

export default RecipePage;
