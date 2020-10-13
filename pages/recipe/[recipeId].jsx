import Head from "next/head";
import Router, { useRouter } from "next/router";

import RecipePageHeader from "../../components/RecipePageHeader";
import RecipeIngredientsList from "../../components/RecipeIngredientsList";

function RecipePage({ recipe }) {
  const { isFallback } = useRouter();

  function createMarkup() {
    return {
      __html: recipe.instructions,
    };
  }
  if (isFallback) {
    return <h1>loading</h1>;
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
        <RecipePageHeader image={recipe.image} title={recipe.title} />
        <RecipeIngredientsList ingredients={recipe.extendedIngredients} />
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { recipeId: "1095990" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { recipeId } = context.params;
  const response = await fetch(
    "https://recipes-website.lnardon.vercel.app/api/getRecipeInfo",
    {
      method: "POST",
      body: recipeId,
    }
  );
  const parsedResponse = await response.json();
  return {
    props: { recipe: parsedResponse },
    revalidate: 10,
  };
}

export default RecipePage;
