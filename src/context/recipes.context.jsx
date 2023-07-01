import { createContext, useContext, useEffect, useState } from "react";
import { recipes } from "../db/recipes";

const RecipesContext = createContext([]);

export const RecipesProvider = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState(recipes);
  return (
    <RecipesContext.Provider value={{ allRecipes, setAllRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
