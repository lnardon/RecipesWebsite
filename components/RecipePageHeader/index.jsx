import React from "react";

function RecipePageHeader({ image, title, summary }) {
  return (
    <div className="recipePageHeaderContainer">
      <img src={image} alt="Cover" />
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default RecipePageHeader;
