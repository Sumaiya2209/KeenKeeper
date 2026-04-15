import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
      
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-6xl text-error" />
        </div>
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-gray-500">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/">
          <button className="btn btn-primary ">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;