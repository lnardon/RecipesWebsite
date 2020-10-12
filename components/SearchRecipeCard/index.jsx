import React, { useState } from "react";
import Router from "next/router";
import styles from "./styles.module.css";

function SearchRecipeCard({ id, image, title }) {
  return (
    <div
      className={styles.searchRecipeCardContainer}
      onClick={() => Router.push(`/recipe/${id}`)}
    >
      <img src={image} alt="Cover" className={styles.searchRecipeCardImage} />
      <h1 className={styles.searchRecipeCardTitle}>{title}</h1>
    </div>
  );
}

export default SearchRecipeCard;
