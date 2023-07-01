import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe-details/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
