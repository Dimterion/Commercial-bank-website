import { Link } from "react-router-dom";

import "./error.css";

function Error() {
  return (
    <main className="error">
      <h1 className="error-title">404</h1>
      <p className="error-text">
        Page not found. Please check the page address or try again later
      </p>
      <Link className="error-link" to="/">
        Return to the home page
      </Link>
    </main>
  );
}

export default Error;
