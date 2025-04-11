// import React from 'react'
// import ProductBox from './ProductBox'
// import Container from './Container'

// async function FeaturedProducts() {
//   // const response = await fetch("https://fakestoreapi.in/api/products", { cache: 'force-cache' })
//   const response = await fetch("https://fakestoreapi.com/products", { cache: 'force-cache' })
//   const data = await response.json()

//   return (
//     <Container>
//       <div className='p-3'>
//         <h1 className='text-center font-bold text-3xl'>Featured Products</h1>
//         <div className="my-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
//           {data.map((product) => {
//             return <ProductBox key={product.id} product={product} />
//           })}
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default FeaturedProducts
