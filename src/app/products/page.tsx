// import { useState, useEffect } from 'react';
// import {Cards} from '@/components/Cards/Cards';

// const API_URL = 'http://localhost:3000/products';  
// export const fetchProducts = async () => {
//       const response = await fetch(API_URL);
//     const products = await response.json();
//     return products;
//   };
     
//   export const Products = async() => {
//     const fetchData = await fetchProducts();

//     return (    
//         <div className='flex flex-wrap gap-4 text-white bg-black'> 
//             <h2 className='w-auto h-7'>Products</h2>


//             <section className='flex flex-wrap gap-4 justify-evenly'>
//                 {fetchData.map(({id,title,price,image}) => (
//                     <Cards key={id} id={id} title={title} price={price} image={image}/>

                    
//                 ))}
//             </section>
//         </div>
        
//     )
//   }
  
// import { useState, useEffect } from 'react';
// import Cards from '@/components/Cards/Cards';  
// const API_URL = 'http://localhost:3000/products';  

// const fetchProducts = async () => {
//   const response = await fetch(API_URL);
//   const products = await response.json();
//   return products;
// };

// const Products = () => {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products = await fetchProducts();
//         setProductList(products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='flex flex-wrap gap-4 text-white bg-black'>
//       <h2 className='w-auto h-7'>Products</h2>

//       <section className='flex flex-wrap gap-4 justify-evenly'>
//         {productList.map(({ id, title, price, image }) => (
//           <cards key={id} id={id} title={title} price={price} image={image} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Products;
"use client";
import Link from 'next/link';
import PATHROUTES from '@/helpers/PathRoutes';
import Image from 'next/image';
import CardProduct from "../../components/CardProduct/CardProduct"
import productsPreload from '@/helpers/productsPreload';
import { useState, useEffect } from 'react';
import IProduct from '@/interfaces/IProduct';
import { fetchProducts } from '@/helpers/fetchProduct.helper';

export const Products = () => {
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

export default Products;
