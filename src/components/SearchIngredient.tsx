import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import "./SearchIngredient.css";

function SearchIngredient() {
  //To store user input
  const [inputIngredient, setInputIngredient] = useState("");

  // To store the fetched recipes
  const [recipes, setRecipes] = useState([]);

  //** this function get the recipes from the API */
  function getRecipes() {
    if (!inputIngredient.trim()) return;

    fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        inputIngredient,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-Api-Key": "a055657f0b6e424b8a1b00e2fd26ebc0",
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);
        // Save the recipes to state
        setRecipes(data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }

  return (
    <div>
      <h3>Search by ingredients that you have in your fridge! </h3>
      <input
        type="search"
        value={inputIngredient}
        placeholder="Enter ingredients,separated by commas"
        onChange={(e) => setInputIngredient(e.target.value)}
      ></input>
      <button onClick={getRecipes}>SEARCH</button>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} image={recipe.image} />
        ))}
      </ul>
    </div>
  );
}

export default SearchIngredient;
