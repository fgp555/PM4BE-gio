"use client";

import React, { useEffect, useState } from 'react';
import PATHROUTES from '@/helpers/PathRoutes';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { getOrders } from '@/helpers/orders.helper';
import CardOrder from '@/components/CardOrder/CardOrder';
import { IOrder } from '@/interfaces/IOrder';

const Dashboard = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { dataUser } = useAuth();
  console.log(orders);

  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(dataUser?.token!);
      setOrders(ordersResponse);
    };
    dataUser?.token && fetchData();
  }, [dataUser?.token]);

  return (
    <div className="bg-gray-100 min-h-screen p-6 justify-center">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Orders</h2>
            <p className="text-gray-600 text-lg"><strong>Total Orders: </strong>{orders.length}</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">User Profile</h2>
            <p className="text-base text-gray-700 md:text-lg"><strong>Name:</strong> {dataUser ? dataUser.user?.name : 'Username'}</p>
            <p className="text-base text-gray-700 md:text-lg"><strong>Phone:</strong> {dataUser ? dataUser.user?.phone : 'Phone'}</p>
            <p className="text-base text-gray-700 md:text-lg"><strong>Address:</strong> {dataUser ? dataUser.user?.address : 'Address'}</p>
            <p className="text-base text-gray-700 md:text-lg"><strong>Email:</strong> {dataUser ? dataUser.user?.email : 'Email'}</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Orders</h2>
            {orders.length === 0 ? (
              <p className="text-gray-600 text-lg">No orders found.</p>
            ) : (
              orders.map((order) => (
                <CardOrder
                  key={order.id}
                  date={order.date}
                  orders={order.products} />
              ))
            )}
          </div>
        </div>

        {/* <div className="text-center mt-8">
          <Link
            href={PATHROUTES.CART}
            className="inline-block bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Cart
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
