import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { RecipesProvider } from "./context/recipes.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </Router>
  // </React.StrictMode>
);
