function RecipeInformation() {
  return (
    <div className="container p-2">
      <div className="card text-bg-dark  text-black">
        <img
          src="https://placehold.co/600x400"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay align-self-start ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
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
