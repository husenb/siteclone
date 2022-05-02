import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
 import navStyles from '../styles/Nav.module.css'
 import { FaArrowRight } from "react-icons/fa";
 import { BiMenuAltRight } from "react-icons/bi";


const nav = () => {
  return (
    <nav className={navStyles.nav}>
    <div className={navStyles.logo} > 
    <Image src="/leapfrog.png" height='40' width="140"/>'
     </div>
     <div className={navStyles.toggle_button}>
         <i><BiMenuAltRight size="3em"/></i>
     </div>

   <div className={navStyles.navlist} >
   <ul>

       
       <li>
           <Link href='/whatwedo'>What We Do</Link>
       </li>
       <li>
           <Link href='/services'>Services</Link>
       </li>
       <li>
           <Link href='/insights'>Insights</Link>
       </li>
       <li>
           <Link href='/about'>Resources</Link>
       </li>
       <li>
           <Link href='/about'>About Us</Link>
       </li>
       <button className={navStyles.navbutton}>Get Started <span> <FaArrowRight/></span> </button>
      
   </ul>
   </div>

  
</nav>
  )
}

export default nav