function RecipeInformation() {
  return (
    <div>
      <h1>Name of recipe</h1>
      <img src="https://placehold.co/800x400" className="img-fluid" alt="" />
      <div>
        <div>
          <span className="material-icons">schedule</span>
          <p>Cooking time</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <span className="material-icons">favorite</span>
          <span className="px-2">likes</span>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-middle" />
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ingredients</th>
          </tr>
        </thead>

        <tr>
          <th scope="row">1</th>
          <td>Ingredients 1</td>
        </tr>
      </div>
      <h3>Let's start with...</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
export default RecipeInformation;
