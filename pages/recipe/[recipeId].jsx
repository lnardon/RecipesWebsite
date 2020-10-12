import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import RecipePageHeader from "../../components/RecipePageHeader";

function RecipePage() {
  const router = useRouter();
  const { recipeId } = router.query;

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/getRecipeInfo", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: recipeId,
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setRecipe(parsedResponse);
    })();
  }, []);
  return (
    <div className="recipePageContainer">
      <RecipePageHeader
        image={recipe.image}
        title={recipe.title}
        summary={recipe.summary}
      />
      <div>{recipe.instructions}</div>
    </div>
  );
}

export default RecipePage;
