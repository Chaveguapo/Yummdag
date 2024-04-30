import "./App.css";
import RecipeInformation from "./components/RecipeInformation";
import "./components/SearchIngredient";
import SearchIngredient from "./components/SearchIngredient";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <SearchIngredient />
        {/* <RecipeInformation /> */}
      </div>
    </>
  );
}

export default App;
