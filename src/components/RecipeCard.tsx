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
    <div className="container">
      <div className="container-fluid">
        <div className="py-lg-5">
          <div className="row">
            {/* <!-- Gallery item --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white shadow p-3 mb-6 bg-body-tertiary rounded">
                <img
                  src={image}
                  alt={title}
                  className="img-fluid card-img-top"
                />
                <div className="p-2">
                  <h5>
                    <a href="#" className="text-dark">
                      {title}
                    </a>
                  </h5>
                  <div className="small text-muted mb-0">
                    <br /> <span className="material-icons">favorite</span>
                    <p>{likes}</p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4 ">
                    <p className="small mb-0">
                      <span className="font-weight-bold ">
                        This recipe has {missedIngredientCount} missed
                        ingredients like:
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
                  <div className="py-1  px-1 text-right">
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
            </div>
            {/* <!-- End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
