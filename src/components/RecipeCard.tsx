import "./RecipeCard.css";

export interface RecipeProps {
  title: string;
  image: string;
  missedIngredientCount: number;
  missedIngredients: string;
  likes: number;
}

export function RecipeCard({ title, image }: RecipeProps) {
  return (
    <div>
      <section className="card-container">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Time of cook</p>
        <button>Open recipe</button>
      </section>
    </div>
  );
}
