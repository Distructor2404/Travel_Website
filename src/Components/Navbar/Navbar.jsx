import React , {useState} from 'react'
import './navbar.css'

import { MdOutlineTravelExplore } from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
  const[active, setActive] = useState('navBar')
  
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const closeNav = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSelection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/>Tour.India</h1>
          </a>
        </div>
        <div className={active}>
        
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Contact us</a>
            </li>

            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>
          <div className="closeNavbar" onClick={closeNav}>
            <AiFillCloseCircle className='icon'/>

          </div>

          
        
        </div>
        <div className="toggleNavbar" onClick={showNav}>
            <TbGridDots className='icon' />
          </div>

      </header>
    </section>
  )
}

export default Navbar