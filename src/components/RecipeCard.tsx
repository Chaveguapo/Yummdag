import "./RecipeCard.css";

export interface RecipeProps {
  title: string;
  image: string;
  missedIngredientCount: number;
  missedIngredients: { originalName: string }[];
  likes: number;
}

export function RecipeCard({
  title,
  image,
  missedIngredientCount,
  missedIngredients,
}: RecipeProps) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>

          <h6>Missed Ingredients</h6>
          <p className="card-text">{missedIngredientCount}</p>
          <ul>
            {missedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.originalName}</li>
            ))}
          </ul>

          <a href="#" className="btn btn-primary">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
