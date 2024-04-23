const RecipeInformation = () => {
  function getRecipeInfo() {
    fetch("https://api.spoonacular.com/recipes/{id}/information", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-Api-Key": "a055657f0b6e424b8a1b00e2fd26ebc0",
      },
    })
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

  return <div></div>;
};
export default RecipeInformation;
