import { useState } from "react";
import { useParams } from "react-router-dom";

function RecipeInformation() {
  const { id } = useParams<{ id: string }>();
  const [recipeData, setRecipeData] = useState({});

  function getInformation() {
    fetch(`https://api.spoonacular.com/recipes/${id}/information`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-Api-Key": "a055657f0b6e424b8a1b00e2fd26ebc0",
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then((data) => {
        console.log(data);
        setRecipeData(data);
      })
      .catch((error) => console.log("Error fetching data", error));
  }
  getInformation();

  return (
    <div className="container p-2 ">
      <h3 className="font-monospace justify-content-start p-3">
        {recipeData.title || "Loading recipe..."}
      </h3>
      <div className="card text-bg-dark  text-black">
        <img src={recipeData.image} className="card-img" alt="..." />
      </div>
      <div className="d-flex flex-row mb-3 justify-content-evenly gap-5 mt-5 mb-5 ">
        <div>
          <span className="material-icons">schedule</span>
          <p>Cooking time</p>
        </div>
        <div>
          <span className="material-icons">favorite</span>
          <span className="px-2">{recipeData.likes}</span>
        </div>
      </div>
      <div className="d-flex align-items-start">
        <ul className="list-group-numbered ">
          <h3>Ingredients</h3>
          <li className="list-group-item">An item</li>
        </ul>
      </div>
      <div></div>
      <h3 className="font-monospace ">Let's start with...</h3>
      <p></p>
    </div>
  );
}
export default RecipeInformation;
