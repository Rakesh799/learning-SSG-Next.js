"use client"
import React, { useState, useEffect } from 'react'

function Slider({ products }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentValue) => {
                return currentValue === products.length - 1 ? 0 : currentValue + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative md:max-w-[50%] md:h-[450px] h-[350px] md:w-[500px] w-[350px] flex justify-center items-center overflow-hidden'>
            <div className='relative w-full h-full'>
                {products.map((product, index) => (
                    <img
                        key={product.id}
                        src={product.image}
                        alt={product.title}
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
