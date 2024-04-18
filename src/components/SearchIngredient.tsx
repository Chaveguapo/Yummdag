import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import "./SearchIngredient.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchIngredient() {
  const [inputIngredient, setInputIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  function getRecipes() {
    console.log("getRecipes");
    if (!inputIngredient.trim()) return;

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${inputIngredient}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-Api-Key": "a055657f0b6e424b8a1b00e2fd26ebc0",
        },
      }
    )
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then((data) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }

  return (
    <div className="container">
      <div className="navbar bg-body-tertiary mx-auto p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="\logo.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
          <h3 className="navbar-text fs-6 fw-2 text mx-auto p-2">
            Search by ingredients that you have in your fridge!
          </h3>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              getRecipes();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              value={inputIngredient}
              placeholder="Enter ingredients separated by comma"
              aria-label="Search"
              onChange={(e) => setInputIngredient(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            image={recipe.image}
            missedIngredientCount={recipe.missedIngredientCount}
            missedIngredients={recipe.missedIngredients}
            likes={recipe.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchIngredient;
