import { useParams } from "react-router-dom";

function RecipeInformation() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container p-2 ">
      <h3 className="font-monospace justify-content-start p-3">
        Recipe title{id}
      </h3>
      <div className="card text-bg-dark  text-black">
        <img
          src="https://placehold.co/200x100"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="d-flex flex-row mb-3 justify-content-evenly gap-5 mt-5 mb-5 ">
        <div>
          <span className="material-icons">schedule</span>
          <p>Cooking time</p>
        </div>
        <div className="">
          <span className="material-icons">favorite</span>
          <span className="px-2">likes</span>
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
