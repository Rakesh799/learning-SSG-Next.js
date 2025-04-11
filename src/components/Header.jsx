'use client'
import React, { useState } from 'react'
import Container from '@/components/Container'
import Link from 'next/link'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { useSearch } from '@/context/SearchContext'

function Header() {

  //To use Context from SearchContext
  const { searchQuery, setSearchQuery } = useSearch()


  // For Hamburger Functionality
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHamburger = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <header className={`bg-[#ffffff33] border border-[#ffffff33] sticky top-0 z-50 backdrop-blur-[40px] py-3 px-1 shadow`}>
      <Container className='flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0'>

        <div className="flex items-center justify-between w-full md:w-[140px]">
          <div>
            <span className="text-[#810446] font-bold text-4xl cursor-pointer">E-Store
              <b className='text-black'>.</b>
            </span>
          </div>
          <div>
            <img
              className='md:hidden cursor-pointer'
              onClick={handleHamburger}
              src={menuOpen ? "/cross.svg" : "/hamburger.svg"}
              alt="Hamburger icon" />
          </div>
        </div>

        <div className={`flex-1 max-w-[500px] md:flex items-center ml-5 ${menuOpen ? "flex" : "hidden"}`}>
          <input
            type="text"
            placeholder='Search for products...'
            className={`lg:w-full w-fit px-4 py-2 border border-[#ddd] rounded-l-[20px] rounded-r-none outline-none`}
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button className="bg-[#810446] text-white px-4 py-[11.5px] rounded-r-[20px] rounded-l-none cursor-pointer border-none">
            <FiSearch size={18} strokeWidth={3} />
          </button>
        </div>

        <div className={`md:flex ${menuOpen ? "flex" : "hidden"}`}>
          <NavBar />
        </div>
      </Container>
    </header>
  )
}

export default Header


const NavBar = () => {
  return (
    <div className={`flex items-center gap-5`}>
      <ul className='flex items-center gap-4 font-semibold'>
        <li className="hover:text-[#810446]"><Link href="/">HOME</Link></li>
        <li className="hover:text-[#810446]"><Link href="/about">ABOUT US</Link></li>
        <li className="hover:text-[#810446]"><Link href="/contact">CONTACT</Link></li>
        <li className="hover:text-[#810446]"><Link href="/store">STORE</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiShoppingCart color='black' size={24} />
          <span className={`absolute top-[-15px] right-[-20px] bg-[#810446] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
            3
          </span>
        </div>
      </div>
    </div>
  )
}
