import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column mt-2 mx-auto">
      <img
        className="mx-auto"
        src="https://media.istockphoto.com/id/860463522/vector/404-error-page-template-for-website-404-alert-flat-design.jpg?s=612x612&w=0&k=20&c=ad0D5cQqnRMRcyQtaFdrk4GgO9LYRYl06V4MReZKsOE="
        alt="Page Not Found"
      />
      <Link to="/" className="mx-auto">
        <button className="bg-primary text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
