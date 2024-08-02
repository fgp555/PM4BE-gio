"use client";
import Link from 'next/link';
import PATHROUTES from '@/helpers/PathRoutes';
import Image from 'next/image';
import CardProduct from '../CardProduct/CardProduct';
import { useState, useEffect } from 'react';
import IProduct from '@/interfaces/IProduct';
import { fetchProducts } from '@/helpers/fetchProduct.helper';

const HomeContainer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const getProducts = await fetchProducts();
      setProducts(getProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100"> {/* Color principal: 60% */}
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Explore Our Catalog {/* Color de acento: 10% */}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Discover the Latest Technology<br className="hidden md:block" />
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Find the best electronic devices and gadgets at unbeatable prices.
            </p>
          </div>
          <div className="flex items-center">
            <Link href={PATHROUTES.PRODUCTS}>
              <div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none cursor-pointer">
              {/* "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" */}
                Products {/* Color secundario: 30% */}
              </div>
            </Link>
            <Link href={PATHROUTES.REGISTER}>
              <div className="inline-flex items-center font-semibold transition-colors duration-200 rounded-lg text-blue-600 hover:text-blue-800 cursor-pointer">
                Register {/* Color secundario: 30% */}
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
            className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
            alt="Productos electrónicos" width={500} height={500}
          />
        </div>
      </div>
      
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Most Purchased Products {/* Color de acento: 10% */}
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {products.slice(0, 3).map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeContainer;
