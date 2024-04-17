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
}: RecipeProps) {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>

          <h6>Missed Ingredients</h6>
          <p className="card-text">{missedIngredientCount}</p>
          <ul>
            {missedIngredients.map((missed, index) => (
              <li key={index}>{missed.name}</li>
            ))}
          </ul>

          <a href="#" className="btn btn-primary">
            See more
          </a>
        </div>
      </div>

      {/* demo starts her */}

      <div className="container-fluid">
        <div className="px-lg-5">
          {/* <!-- For demo purpose --> */}
          <div className="row py-5">
            <div className="col-lg-12 mx-auto"></div>
          </div>
          {/* <!-- End --> */}

          <div className="row">
            {/* <!-- Gallery item --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm">
                <img
                  src={image}
                  alt={title}
                  className="img-fluid card-img-top"
                />
                <div className="p-4">
                  <h5>
                    <a href="#" className="text-dark">
                      {title}
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0">
                      <i className="fa fa-picture-o mr-2"></i>

                      <span className="font-weight-bold">
                        This recipe has {missedIngredientCount} missed
                        ingredients like:
                      </span>

                      {missedIngredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill text-bg-danger mx-2"
                        >
                          {ingredient.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End --> */}
          </div>
          <div className="py-5 text-right">
            <a href="#" className="btn btn-dark px-5 py-3 text-uppercase">
              Show me more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
