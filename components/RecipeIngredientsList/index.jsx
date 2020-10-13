import { useState } from "react";
import styles from "./styles.module.css";

function RecipeIngredientsList({ ingredients }) {
  const [email, setEmail] = useState("");

  async function sendEmail() {
    let ingredientNames = ingredients.map((ingredient) => ingredient.name);
    let response = await fetch("http://localhost:3000/api/addToShoppingCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        list: ingredientNames.join(",\n"),
      }),
    });
  }

  return (
    <div className={styles.ingredientsListContainer}>
      <div>
        <h1>Ingredients</h1>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendEmail}>Add to Cart</button>
      </div>
      {ingredients.map((ingredient) => {
        return (
          <div className={styles.ingredientContainer}>
            <h1 className={styles.ingredientName}>{ingredient.name}</h1>
            <h2>
              {ingredient.amount} {ingredient.measures.metric.unitShort}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeIngredientsList;
