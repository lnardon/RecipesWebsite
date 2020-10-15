import React from "react";

function RecipePageHeader({ image, title, summary }) {
  return (
    <div
      className="recipePageHeaderContainer"
      style={{ width: "100%", maxWidth: 1024 }}
    >
      <img
        src={image}
        alt="Cover"
        style={{ width: "100%", borderRadius: "0.5rem" }}
      />
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default RecipePageHeader;
