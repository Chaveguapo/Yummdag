import { Link, link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Oops! It seems like you've stumbled upon a page that's taken a
          vacation
        </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">404 Not Found</h6>
        <p class="card-text">Let's get you back on track</p>
        <Link to="/"> Return to home and Happy browsing!</Link>
      </div>
    </div>
  );
};
