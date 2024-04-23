import "./RecipeCard.css";

export interface RecipeProps {
  title: string;
  image: string;
  missedIngredientCount: number;
  missedIngredients: { name: string }[];
  likes: number;
}

export function RecipeCard({
  title,
  image,
  missedIngredientCount,
  missedIngredients,
  likes,
}: RecipeProps) {
  return (
    <div className="col-sm-12 col-lg-4">
      <div className="container-fluid-md  ">
        <section>
          <div className="shadow bg-body-tertiary card border-secondary mb-3 align-items-stretch ">
            <img
              src={image}
              alt={title}
              className="card-img-top img-fluid rounded-5 rounded-top-0"
            />
            <div className="card-block p-2">
              <h6 className="p-2">
                <a href="#" className="text-dark card-title p-1">
                  {title}
                </a>
              </h6>
              <div className="d-flex flex-wrap justify-content-center">
                <span className="material-icons">favorite</span>
                <span className="px-2">{likes}</span>
              </div>
              <div className="d-flex align-items-center  rounded-pill bg-light ">
                <p className="small mb-0 card-body ">
                  <span className="font-weight-bold ">
                    This recipe has {missedIngredientCount} missed ingredients
                    like:
                  </span>

                  <br />
                  {missedIngredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="badge rounded-pill text-bg-danger mx-1 "
                    >
                      {ingredient.name}
                    </span>
                  ))}
                </p>
              </div>
              <div className="py-2 px-2 text-right">
                <button
                  type="button"
                  className="btn btn-outline-success px-4 "
                  onClick={() => alert("More recipe details coming soon!")}
                >
                  See more!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
