import styles from "./styles.module.css";

function RecipeIngredientsList({ ingredients }) {
  return (
    <div>
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
