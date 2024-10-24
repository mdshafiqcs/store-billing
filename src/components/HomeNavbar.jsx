import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {cn} from '../lib/utils.js'
import {menuCloseIcon, menuOpenIcon} from '../assets/index.js'
import { useEffect } from 'react'
import { useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function HomeNavbar() {

  const [menu, setMenu] = useState("home");

  const sections = ['home', 'about', 'feature', 'pricing', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 6;

    // Loop through each section and check its position relative to the viewport
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight
        ) {
          setMenu(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }

  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="bg-white shadow sticky">
      <div className="container flex justify-between items-center mx-auto py-3">
        {/* <img src={menuOpenIcon} onClick={openMenu} className='nav-mob-open' alt="" /> */}
        <NavLink to='/' >
          <div onClick={() => setMenu("home")} className='flex text-2xl font-medium cursor-pointer bg-[linear-gradient(to_right,#089e62,#085b3a)] text-transparent bg-clip-text [-webkit-background-clip: text]'>
            <h1>Store</h1>
            <span className='font-bold'>X</span>
          </div>
        </NavLink>
      
        <ul ref={menuRef} className="flex gap-6 text-lg text-slate-600">
          {/* <img src={menuCloseIcon} onClick={closeMenu} alt="" className="nav-mob-close" /> */}
          <li >
            <AnchorLink className="anchor-link" offset={110} href="#home" >
              <p onClick={() => setMenu("home")} >Home</p>
            </AnchorLink>  
            { menu == "home" && <Underline /> } 
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={70} href="#about" >
              <p onClick={() => setMenu("about")} >About</p>
            </AnchorLink>  
            { menu == "about" && <Underline />} 
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={70} href="#feature" >
              <p onClick={() => setMenu("feature")} >Feature</p>
            </AnchorLink>  
            { menu == "feature" && <Underline />} 
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={70} href="#pricing" >
              <p onClick={() => setMenu("pricing")} >Pricing</p>
            </AnchorLink>  
            { menu == "pricing" && <Underline />} 
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={70} href="#contact" >
              <p onClick={() => setMenu("contact")} >Pricing</p>
            </AnchorLink>  
            { menu == "contact" && <Underline />} 
          </li>
          
        </ul>

        <div className='flex gap-6 items-center'>
          <NavLink to='login' className='hover:text-teal-600 transition' >Login</NavLink>
          <NavLink to='register'>
            <button className="rounded-lg font-medium bg-teal-600 text-white px-5 py-3 hover:bg-teal-700 transition ">Start for free</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}


function Underline() {
  return (
    <div className='flex justify-center '>
      <div className="h-[2px] transition rounded-md w-[70%] bg-teal-600" />
    </div>
  )
}
