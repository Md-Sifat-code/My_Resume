import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // Import unique icons for the hamburger menu
import { Link } from 'react-router-dom' // Use this for navigation

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <section>
      <div className='container px-6 md:px-0 mx-auto flex flex-row mt-6 justify-between items-center'>
        <div>
          {/* Logo part */}
          <p className='tridon font-bold text-teal-400 text-3xl'>
            <span className='lavis'>S</span>ifat
          </p>
        </div>

        {/* Desktop Navlinks */}
        <div className='hidden lg:flex items-center space-x-6'>
          <Link to="/blogs" className='text-teal-400 hover:text-teal-600'>Blogs</Link>
          <Link to="/research" className='text-teal-400 hover:text-teal-600'>Research</Link>
          <Link to="/achievements" className='text-teal-400 hover:text-teal-600'>Achievements</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className='text-teal-400 text-3xl' />
            ) : (
              <FaBars className='text-teal-400 text-3xl' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center space-y-4 mt-4'>
          <Link to="/blogs" className='text-teal-400 hover:text-teal-600'>Blogs</Link>
          <Link to="/research" className='text-teal-400 hover:text-teal-600'>Research</Link>
          <Link to="/achievements" className='text-teal-400 hover:text-teal-600'>Achievements</Link>
        </div>
      )}
    </section>
  )
}

export default Navbar
