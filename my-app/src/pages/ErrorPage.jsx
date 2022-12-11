import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>
        <strong>
          Error: {error.statusText} {error.status}
        </strong>
      </p>
      <Link to={"/"}>Back to Home</Link>
      {/* < >Back to Home</> */}
    </div>
  );
};

export default ErrorPage;
