import React from 'react'
// import logo from '../assets/images/peace.jpg';
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <>
    <header className='header'>
        <a href='#' className='logo'>
            <img src={Logo} alt='a'/>
        </a>
        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#menu'>Menu</a>
          <a href='#products'>Products</a>
          <a href='#review'>Reviews</a>
          <a href='#contact'>Contact</a>
          <a href='#blogs'>Blogs</a>
          <div className='icons'>
            <FontAwesomeIcon icon={faCoffee}/>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar