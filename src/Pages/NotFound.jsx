import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <img
        className=""
        src="https://media.istockphoto.com/id/860463522/vector/404-error-page-template-for-website-404-alert-flat-design.jpg?s=612x612&w=0&k=20&c=ad0D5cQqnRMRcyQtaFdrk4GgO9LYRYl06V4MReZKsOE="
        alt="Page Not Found"
      />
      <Link
        to="/"
        className="mx-auto"
      >
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
