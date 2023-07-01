import React, { useEffect, useState } from "react";
import { recipes } from "../db/recipes";
import { Link, useParams } from "react-router-dom";
import AddRecipeModal from "./AddRecipeModal";
import AddRecipe from "./AddRecipe";
import { useRecipes } from "../context/recipes.context";

const RecipeList = () => {
  const { allRecipes, setAllRecipes } = useRecipes();
  const [isAddRecipeModalOpen, setIsAddRecipeModalOpen] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currSearchCategory, setCurrSearchCategory] = useState("name");

  const handleSearchRecipe = (e) => {
    const newFilteredRecipes = allRecipes.filter((recipe) => {
      if (currSearchCategory === "name") {
        return recipe.name.toLowerCase().includes(e.target.value);
      } else if (currSearchCategory === "ingredients") {
        return recipe.ingredients
          .toString()
          .toLowerCase()
          .includes(e.target.value);
      } else {
        return recipe.cuisine.toLowerCase().includes(e.target.value);
      }
    });
    setFilteredRecipes(newFilteredRecipes);
  };

  const handleSearchCategoryChange = (e) => {
    setCurrSearchCategory(e.target.value);
  };

  useEffect(() => {
    setFilteredRecipes(allRecipes);
  }, [allRecipes]);

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <input
            style={{ marginRight: "0.5rem" }}
            className="search-input"
            placeholder="Search recipes..."
            onChange={handleSearchRecipe}
          />
          <span>Filters</span>
          <input
            type="radio"
            value={"name"}
            checked={currSearchCategory === "name"}
            onChange={handleSearchCategoryChange}
          />
          Name
          <input
            type="radio"
            value={"ingredients"}
            onChange={handleSearchCategoryChange}
            checked={currSearchCategory === "ingredients"}
          />
          Ingredients
          <input
            type="radio"
            value={"cuisine"}
            onChange={handleSearchCategoryChange}
            checked={currSearchCategory === "cuisine"}
          />
          Cuisine
          <button
            style={{ marginLeft: "0.5rem" }}
            onClick={() => setIsAddRecipeModalOpen(true)}
          >
            Add new Recipe
          </button>
        </div>
        <div style={{ marginTop: "2rem", display: "flex" }}>
          {filteredRecipes.map((recipe) => (
            <div
              style={{
                width: "300px",
                border: "solid 1px black",
                borderRadius: "4px",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <Link to={`/recipe-details/${recipe.id}`}>
                <div>
                  <p>
                    <b>{recipe.name}</b>
                  </p>
                  <div>
                    <button disabled style={{ marginRight: "0.5rem" }}>
                      Edit (under progress)
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setAllRecipes((prev) =>
                          prev.filter(
                            (prevRecipe) => prevRecipe.id !== recipe.id
                          )
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isAddRecipeModalOpen && (
        <AddRecipeModal
          isOpen={isAddRecipeModalOpen}
          onClose={() => setIsAddRecipeModalOpen(false)}
        >
          <AddRecipe
            setRecipes={setAllRecipes}
            handleClose={() => setIsAddRecipeModalOpen(false)}
          />
        </AddRecipeModal>
      )}
    </div>
  );
};

export default RecipeList;
