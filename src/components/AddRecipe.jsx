import React, { useState } from "react";

const AddRecipe = ({ setRecipes, handleClose }) => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [currIngredientName, setCurrIngredientName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currInstructionName, setCurrInstructionName] = useState("");
  const [instructions, setInstructions] = useState([]);

  const handleCreateRecipe = () => {
    setRecipes((prev) => [
      ...prev,
      {
        id: new Date().getTime() / 1000,
        name,
        ingredients,
        instructions,
        cuisine,
      },
    ]);
    handleClose();
  };

  return (
    <div>
      <div>
        <label>Recipe Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Cuisine</label>
        <input value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      </div>

      <div>
        Ingredients
        <input
          value={currIngredientName}
          onChange={(e) => setCurrIngredientName(e.target.value)}
        />
        <button
          onClick={() => {
            setIngredients((prev) => [...prev, currIngredientName]);
            setCurrIngredientName("");
          }}
        >
          Add
        </button>
        <ul>
          {ingredients.map((ingredient) => (
            <li>
              {ingredient}{" "}
              <button
                onClick={() =>
                  setIngredients((prev) =>
                    prev.filter(
                      (prevIngredient) => prevIngredient !== ingredient
                    )
                  )
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Instructions
        <input
          value={currInstructionName}
          onChange={(e) => setCurrInstructionName(e.target.value)}
        />
        <button
          onClick={() => {
            setInstructions((prev) => [...prev, currInstructionName]);
            setCurrInstructionName("");
          }}
        >
          Add
        </button>
        <ol>
          {instructions.map((instruction) => (
            <li>
              {instruction}{" "}
              <button
                onClick={() =>
                  setInstructions((prev) =>
                    prev.filter(
                      (prevInstruction) => prevInstruction !== instruction
                    )
                  )
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
      <button onClick={handleCreateRecipe}>Add Recipe</button>
    </div>
  );
};

export default AddRecipe;
