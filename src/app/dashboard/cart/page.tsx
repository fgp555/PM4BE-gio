"use client";
import IProduct from '@/interfaces/IProduct';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import Link from 'next/link';
import PATHROUTES from '@/helpers/PathRoutes';

const CartPage = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { dataUser } = useAuth();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleCheckout = async () => {
    const idProducts = cart.map((product) => product.id);
    await createOrder(idProducts, dataUser?.token!);

    alert('Order created successfully');
    setCart([]);
    setTotal(0);
    localStorage.removeItem('cart');
  };

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const updatedTotal = updatedCart.reduce((acc, product) => acc + product.price, 0);

    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">My Cart</h1>
        <div className="mb-6">
          {cart.length === 0 ? (
            <p className="text-base text-gray-700 md:text-lg">Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="border-b border-gray-200 py-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">{product.name}</h2>
                  <p className="text-base text-gray-700 md:text-lg">{product.description}</p>
                  <p className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">${product.price.toFixed(2)}</p>
                </div>
                <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer"
                onClick={() => handleRemoveProduct(product.id)} >Delete</button>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center mt-8">
          <h2 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Total: ${total.toFixed(2)}</h2>
          <button
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer"
            onClick={handleCheckout}>  Place Order
          </button>

          {/*           
          <Link
            href={PATHROUTES.CART}
            className="inline-block bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Cart
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
