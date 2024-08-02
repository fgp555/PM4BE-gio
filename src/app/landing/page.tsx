// src/app/pages/Landing.tsx

import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the E-commerce App</h1>
        <p className="mb-8">Your one-stop shop for all your needs.</p>
        <a href="/home" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </a>
      </div>
      <div className="mt-12 w-full max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Wide Range of Products</h2>
            <p>Explore a variety of categories and find what you need.</p>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Best Prices</h2>
            <p>Get the best deals and offers on your favorite products.</p>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Fast Delivery</h2>
            <p>Experience quick and reliable delivery to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
