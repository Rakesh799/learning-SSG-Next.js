import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#3c0020] text-white'>
      <Container>

      <div className="grid grid-cols-4 p-8 gap-4">
          <ul>
            <h2 className='font-bold text-md mb-4 py-2'>Our Company</h2>
            <li className='text-sm cursor-pointer hover:font-semibold'>We provide top-quality electronics, gadgets, clothing, and accessories for all your needs. Customer satisfaction is our top priority.</li>
          </ul>
          <ul>
            <h2 className='font-bold text-md mb-4 py-2'>Quick Links</h2>
            <li className='text-sm cursor-pointer hover:font-semibold'><Link href="/about"> About Us</Link></li>
            <li className='text-sm cursor-pointer hover:font-semibold'><Link href="/store"> Store</Link></li>
            <li className='text-sm cursor-pointer hover:font-semibold'><Link href="/contact"> Contact</Link> Us</li>
            <li className='text-sm cursor-pointer hover:font-semibold'><Link href="/faq"> FAQ</Link></li>
          </ul>
          <ul className='col-span-2'>
            <h2 className='font-bold text-md mb-4 py-2'>Subscribe to Our Newsletter</h2>
            <li className='text-sm cursor-pointer hover:font-semibold'>Get the latest updates on new products and upcoming sales</li>
            <li className='flex flex-col sm:flex-row py-2'>
              <input type="email" placeholder='Enter your Email' className='bg-white text-[#810446] outline-none p-2 sm:rounded-l-lg sm:rounded-t-none rounded-t-lg flex-1'/>
              <button className='bg-[#810446] sm:rounded-r-lg sm:rounded-l-none rounded-b-lg px-4 cursor-pointer font-semibold'>Subscribe</button>
              </li>
          </ul>
      </div>
      </Container>
      <div className='text-center py-2'>© 2025 E-Store. |  Created with 💛 by Rakesh Choudhury</div>
    </div>
  )
}

export default Footer
