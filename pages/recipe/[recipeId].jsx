import Head from "next/head";
import Router, { useRouter } from "next/router";

import RecipePageHeader from "../../components/RecipePageHeader";
import RecipeIngredientsList from "../../components/RecipeIngredientsList";
import ExpandableArea from "../../components/ExpandableArea";
import styles from "./styles.module.css";

function RecipePage({ recipe }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Head>
        <title>Recipe - {recipe.title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 onClick={() => Router.back()} className={styles.backBtn}>
            go back
          </h4>
          <RecipePageHeader image={recipe.image} title={recipe.title} />

          <ExpandableArea
            title="Ingredients"
            content={
              <RecipeIngredientsList ingredients={recipe.extendedIngredients} />
            }
          />
          <ExpandableArea
            title="Instructions"
            content={
              <div>
                {recipe?.analyzedInstructions[0]?.steps.map((instruction) => {
                  return (
                    <div style={{ padding: "0rem 1rem" }}>
                      <h2>
                        {instruction.number} - {instruction.step}
                      </h2>
                    </div>
                  );
                })}
              </div>
            }
          />
        </div>
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
