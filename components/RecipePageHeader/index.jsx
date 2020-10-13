import React from "react";

function RecipePageHeader({ image, title, summary }) {
  return (
    <div className="recipePageHeaderContainer" style={{ width: "100%" }}>
      <img src={image} alt="Cover" style={{ width: "100%" }} />
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default RecipePageHeader;
