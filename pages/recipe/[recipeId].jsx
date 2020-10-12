import { useEffect } from "react";
import { useRouter } from "next/router";

function RecipePage() {
  const router = useRouter();
  const { recipeId } = router.query;

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/getRecipeInfo", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeId),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
    })();
  }, []);
  return (
    <div className="recipePageContainer">
      <h1>{recipeId}</h1>
    </div>
  );
}

export default RecipePage;
