import React from "react";
import Router from "next/router";
import styles from "./styles.module.css";

function RecipeCard({ id, image, title }) {
  return (
    <div
      className={styles.container}
      onClick={() => Router.push(`/recipe/${id}`)}
    >
      <img src={image} alt="Cover" className={styles.image} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default RecipeCard;
