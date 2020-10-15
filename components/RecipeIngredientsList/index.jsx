import { useState } from "react";
import styles from "./styles.module.css";

function RecipeIngredientsList({ ingredients }) {
  const [email, setEmail] = useState("");

  async function sendEmail() {
    let ingredientNames = ingredients.map((ingredient) => ingredient.name);
    let response = await fetch(
      "https://recipes-website.lnardon.vercel.app/api/addToShoppingCart",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          list: ingredientNames.join(",\n"),
        }),
      }
    );
  }

  return (
    <div className={styles.ingredientsListContainer}>
      <div>
        <h1>Ingredients</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendEmail}>Add to Shopping List</button>
      </div>
      <div style={{ margin: "2rem 0rem" }}>
        {ingredients.map((ingredient) => {
          return (
            <div className={styles.ingredientContainer}>
              <h2>
                {ingredient.amount} {ingredient.measures.metric.unitShort}
              </h2>
              <h1 className={styles.ingredientName}>{ingredient.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecipeIngredientsList;
