import Image from "next/image";
import IProduct from "../../interfaces/IProduct";
import React from "react";


interface CardOrderProps {
    date: string;
    orders: IProduct[];
}

const CardOrder = ({ date, orders }: CardOrderProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{date}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {orders?.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                        <Image src={product.image} 
                        alt={product.name} 
                        className=
                        // "w-full h-48 object-cover mb-4 rounded-lg" />
                        "w-32 h-32 object-cover mb-4 rounded-lg mx-auto" />
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-gray-700">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardOrder;
