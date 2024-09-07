import React, { useRef, useState } from 'react';
import {assets} from "../../assets/assets.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css"

const Navbar = () => {
  const [menu,setMenu]=useState()
  return (
      <nav className='navbar'>
      <img src={assets.logo_new} alt='Logo' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")}className={menu==="home"?"active":""}>Home</li>
        <li onClick={() => setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <FontAwesomeIcon icon={faSearch}/>
        <div className="navbar-search-icon">
          <FontAwesomeIcon icon={faBasketShopping}/> 
        <div className="dot"></div>
        </div>
        <button className='sign-in'>Sign in</button>
      </div>
      </nav>
  );
}

export default Navbar;
