import React from 'react'
import Link from 'next/link'
 import navStyles from '../styles/Nav.module.css'
 import { FaArrowRight } from "react-icons/fa";


const nav = () => {
  return (
    <nav className={navStyles.nav}>
    <div className={navStyles.logo} > 
    
    <img src='https://www.lftechnology.com/wp-content/themes/Froggy/img/logo_leapfrog.svg' height={50} width={300}/>
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
       <button>Get Started <span> <FaArrowRight/></span> </button>
      
   </ul>
   </div>

  
</nav>
  )
}

export default nav