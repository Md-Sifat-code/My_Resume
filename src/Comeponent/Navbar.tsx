import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // Import unique icons for the hamburger menu
import { Link, useLocation } from 'react-router-dom' // Use this for navigation

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation() // Get current route path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'active-link' : ''
  }

  return (
    <section className='bg-black'>
      <div className='container px-6 md:px-0 mx-auto flex flex-row  justify-between items-center'>
        <div className='mt-6 mb-6'>
          {/* Logo part */}
          <Link to={"/"} className='tridon font-bold text-amber-500 text-3xl'>
            <span className='lavis'>S</span>ifat
          </Link>
        </div>

        {/* Desktop Navlinks */}
        <div className='hidden lg:flex items-center space-x-6'>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</Link>
          <Link to="/research" className={`nav-link ${isActive('/research')}`}>Research</Link>
          <Link to="/achievements" className={`nav-link ${isActive('/achievements')}`}>Achievements</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className='text-amber-500 text-3xl' />
            ) : (
              <FaBars className='text-amber-500 text-3xl' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center space-y-4 mt-4'>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</Link>
          <Link to="/research" className={`nav-link ${isActive('/research')}`}>Research</Link>
          <Link to="/achievements" className={`nav-link ${isActive('/achievements')}`}>Achievements</Link>
        </div>
      )}
    </section>
  )
}

export default Navbar
