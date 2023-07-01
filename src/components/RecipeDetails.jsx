import React from "react";
import { recipes } from "../db/recipes";
import { useParams } from "react-router-dom";
import { useRecipes } from "../context/recipes.context";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { allRecipes } = useRecipes();
  const recipe = allRecipes.find((recipe) => recipe.id === +recipeId);
  console.log(recipe, recipeId);
  return (
    <div>
      <h2>RecipeDetails</h2>
      <div>
        <h3>{recipe.name}</h3>
        <p>
          <b>Cuisine: </b>
          {recipe.cuisine}
        </p>

        <div>
          <p>
            <b>Ingredients</b>
          </p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>

          <p>
            <b>Instructions</b>
          </p>

          <ol>
            {recipe.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
