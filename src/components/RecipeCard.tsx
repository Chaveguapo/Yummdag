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
    <div className="col-xs-10 col-md-4 col-sm-">
      <div className="container-fluid-md ">
        <section>
          <div className="shadow bg-body-tertiary">
            <img
              src={image}
              alt={title}
              className="card-img-top img-fluid rounded-5 rounded-top-0"
            />
            <div className="card-block p-2">
              <h6>
                <a href="#" className="text-dark card-title">
                  {title}
                </a>
              </h6>
              <div className="medium text-muted mb-0">
                <div className="d-flex justify-content-center">
                  <span className="material-icons">favorite</span>
                  <span className="p-2 ">{likes}</span>
                </div>
                <p className="text-center card-text fs-6 fw-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4 ">
                <p className="small mb-0">
                  <span className="font-weight-bold text-center ">
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
                  className="btn btn-outline-success"
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
