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
      <section className="card-container">
        <img src={image} alt={title} />
        <h3>{title}</h3>

        <p>{missedIngredientCount}</p>

        <ul>
          {missedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.originalName}</li>
          ))}
        </ul>
        <button>Open recipe</button>
      </section>
    </div>
  );
}
