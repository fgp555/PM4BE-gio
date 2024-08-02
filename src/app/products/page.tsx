"use client";
import Link from "next/link";
import PATHROUTES from "@/helpers/PathRoutes";
import Image from "next/image";
import CardProduct from "../../components/CardProduct/CardProduct";
import productsPreload from "@/helpers/productsPreload";
import { useState, useEffect } from "react";
import IProduct from "@/interfaces/IProduct";
import { fetchProducts } from "@/helpers/fetchProduct.helper";

const Products = () => {
  // Cambiar 'export const Products' a 'const Products'
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const getProducts = await fetchProducts();
      setProducts(getProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="most-purchased-products py-20 bg-white text-center">
        <h2 className="text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Products</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {products.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products; // Asegurarse de exportar por defecto
