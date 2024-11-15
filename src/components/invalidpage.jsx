import React from 'react';
import { Link } from 'react-router-dom';

const InvalidPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-blue-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back To BookHive
        </Link>
      </div>
    </div>
  );
};

export default InvalidPage;
