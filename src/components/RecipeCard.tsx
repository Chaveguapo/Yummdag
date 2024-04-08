import "./RecipeCard.css";

export interface RecipeProps {
  title: string;
  image: string;
}

export function RecipeCard({ title, image }: RecipeProps) {
  return (
    <div>
      <section>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Time of cook</p>
        <button>Open recipe</button>
      </section>
    </div>
  );
}
