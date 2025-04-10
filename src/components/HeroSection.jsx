import React from 'react'
import Container from './Container'
import Slider from './Slider'

async function HeroSection() {
    const res = await fetch("https://fakestoreapi.in/api/products?limit=5")
    const data = await res.json();


    return (
        <div>
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-lg gap-2">
                    <div className="text-gray-700 md:max-w-[50%] flex flex-col gap-4 text-center">
                        <h1 className='text-5xl font-bold'>One stop solution
                            <span className='text-[#810446] block sm:inline'> E-Store</span>
                        </h1>
                        <p className='p-3 text-lg sm:text-start'>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
                        <p className='px-3 sm:text-start'>Exclusive deals just for you !</p>
                        <button className='text-[#810446] bg-gray-200 md:w-1/4 mx-auto py-2 px-3 md:mx-3 font-bold rounded-xl hover:bg-gray-300 cursor-pointer'>Shop Now</button>
                    </div>
                    <Slider products={data.products}/>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection
