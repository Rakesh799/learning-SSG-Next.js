import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'

function Header() {
  return (
    <header className={`bg-[#ffffff33] border border-[#ffffff33] sticky top-0 z-50 backdrop-blur-[40px] py-3 px-1 shadow`}>
      <Container className='flex justify-between items-center'>

        <div className="flex items-center">
          <span className="text-[#810446] font-bold text-4xl">E-Store
            <b className='text-black'>.</b>
          </span>
        </div>

        <div className={`flex-1 max-w-[500px] lg:flex hidden items-center ml-5`}>
          <input
            type="text"
            placeholder='Search for products...'
            className={`w-full px-4 py-2 border border-[#ddd] rounded-l-[20px] rounded-r-none outline-none`}

          />
          <button className="bg-[#810446] text-white px-4 py-[11.5px] rounded-r-[20px] rounded-l-none cursor-pointer border-none">
            <FiSearch size={18} strokeWidth={3}/>
          </button>
        </div>
        <NavBar/>
      </Container>
    </header>
  )
}

export default Header


const NavBar = () => {
  return (
    <navbar className="flex items-center gap-5">
      <ul className='flex items-center gap-3 font-semibold'>
        <li className=""><Link href="/">Home</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiShoppingCart color='black' size={24} />
          <span className={`absolute top-[-15px] right-[-20px] bg-[#810446] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
            3
          </span>
        </div>
      </div>
    </navbar>
  )
}
