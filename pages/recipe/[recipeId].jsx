import Head from "next/head";
import Router, { useRouter } from "next/router";

import IngredientsList from "../../components/IngredientsList";
import ExpandableArea from "../../components/ExpandableArea";
import LoadingFallback from "../../components/LoadingFallback";
import getRandomInt from "../../hooks/getRandomInt";
import styles from "./styles.module.css";

function RecipePage({ recipe }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <LoadingFallback />;
  }

  return (
    <>
      <Head>
        <title>Recipe - {recipe.title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 onClick={() => Router.back()} className={styles.backBtn}>
            back
          </h4>
          <div className="" style={{ width: "100%", maxWidth: 1024 }}>
            <img src={recipe.image} alt="Cover" className={styles.image} />
            <h1 className={styles.title}>{recipe.title}</h1>
          </div>

          <ExpandableArea
            title={`Ingredients (${recipe.extendedIngredients.length})`}
            content={
              <IngredientsList ingredients={recipe.extendedIngredients} />
            }
          />
          <ExpandableArea
            title="Instructions"
            content={
              <div className={styles.stepsContainer}>
                {recipe?.analyzedInstructions[0]?.steps.map((instruction) => {
                  return (
                    <div className={styles.stepContainer}>
                      <h2 className={styles.step}>
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
  let parsedResponse = await response.json();
  // If recipe ID doesn't exist, try another one
  if (parsedResponse.code === 404) {
    const response = await fetch(
      "https://recipes-website.lnardon.vercel.app/api/getRecipeInfo",
      {
        method: "POST",
        body: getRandomInt(1, 1650000),
      }
    );
    parsedResponse = await response.json();
    return {
      props: { recipe: parsedResponse },
      revalidate: 24 * 60 * 60, // 24 hours
    };
  }
  return {
    props: { recipe: parsedResponse },
    revalidate: 24 * 60 * 60, // 24 hours
  };
}

export default RecipePage;
