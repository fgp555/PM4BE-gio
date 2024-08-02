import React from 'react';
import IProduct from '../../interfaces/IProduct';

const ProductDetail  = ({ product }: { product: IProduct}) => {
  return (
    <div className="flex">
      <img className="w-1/2 h-auto rounded-lg shadow-lg" src={product.image} alt={product.name} />
      <div className="w-1/2 ml-8">
        <p className="text-xl mb-4">{product.description}</p>
        <p className="text-3xl font-bold mb-4">${product.price}</p>
        <p className="text-lg mb-4">Stock: {product.stock}</p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

