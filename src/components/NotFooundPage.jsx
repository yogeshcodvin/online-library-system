

import '../utils/NotFoundPage.css'

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go Back to Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
