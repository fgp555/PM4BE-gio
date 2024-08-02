import React from 'react'
import Card from '../CardProduct/CardProduct'
import productsPreload from '@/helpers/productsPreload'
import  IProduct  from '@/interfaces/IProduct'


const Cards: React.FC<{products: IProduct[]}> = ( { products }) => {

    return (
        
        <div className='flex flex-wrap gap-4 justify-center '>
            {products.map((product) => {
                    return (
                        <Card key={product.id} {...product} />
                    )
                })
            }
        </div>
    )
}

export default Cards


// return (
//     <div className="p-6 bg-gray-100">
//         <h2 className="text-2xl font-bold mb-4">Carrito</h2>
//         {products.length === 0 ? (
//             <p>Tu carrito está vacío.</p>
//         ) : productsPreload ? (
//             <p>Cargando...</p>
//         )
//         : (
//             <Cards products={products} /> 
//         )}
//     <div className='flex flex-wrap gap-4 justify-center '>
//         {products.map((product) => {
//                 return (
//                     <Card key={product.id} {...product} />
//                 )
//             })
//         }
//     </div>
//     </div>
// )
// }

// export default Cards