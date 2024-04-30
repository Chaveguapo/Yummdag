import { Link, link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Oops! It seems like you've stumbled upon a page that's taken a
          vacation
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          404 Not Found
        </h6>
        <p className="card-text">Let's get you back on track</p>
        <Link to="/"> Return to home and Happy browsing!</Link>
      </div>
    </div>
  );
};
