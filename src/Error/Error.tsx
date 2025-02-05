import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router v6

const  Error: React.FC=()=> {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackClick = () => {
    // Navigate the user back to the previous page
    navigate(-1); // -1 moves the user back in history
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <FaExclamationTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Under Development
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We building up this page for better exprience Thanks for your
            support. Keep Brousing!.
          </p>
        </div>

        <div className=" flex justify-center">
          <button
            onClick={handleBackClick} // Call handleBackClick when the button is clicked
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
