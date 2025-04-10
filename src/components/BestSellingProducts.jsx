import React from 'react'
import Container from './Container'
import ProductBox from './ProductBox';

async function BestSellingProducts() {

    const res = await fetch("https://fakestoreapi.com/products?limit=5")
    const data = await res.json()
    
    

    return (
        <div className='bg-gray-200 pt-2 pb-8'>
            <Container>
                <h1 className='text-center font-bold text-3xl mt-4'>Our Best Selling Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {data.map((product)=>{
                            return <ProductBox product={product} key={product.id}/>
                    })}
                </div>
            </Container>
        </div>
    )
}

export default BestSellingProducts
