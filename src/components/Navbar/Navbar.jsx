import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import name_logo from '../../assets/MyPortfolio.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      {/* <img src={name_logo} alt="Image"/> */}
      <h1>MyPortfolio</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-menu-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-menu-close'/>
      <li><AnchorLink className='anchor-link' offset={50} href='#home'><p >Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p >About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p >Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar
