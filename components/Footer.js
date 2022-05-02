import React from 'react'
import footStyles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (

    <div className={footStyles.footer_container}>
        <div className={footStyles.footer_top}>
            <div className={footStyles.footer_top_left}>
                <h1>Join our newsletter</h1>
                <p>Sign up to stay updated with the latest insights,<br/> news, and more.</p>
            </div >
            <div className={footStyles.footer_top_right}>
                <input placeholder='Your email address' type="email" name="email" id="email_input" />
                <button className={footStyles.footer_button}>Subscribe</button>
            </div>
        </div>
        <div className={footStyles.footer_mid}>
            <div className={footStyles.eachcoloumn}> 
                <h3>Company</h3>
                <Link href='/about'> About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                    
            
            </div>
            <div className={footStyles.eachcoloumn}>
                 <h3>Services</h3>
                 <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                    
                 

            </div>
            <div className={footStyles.eachcoloumn}>
                 <h3>Join</h3>
                 <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                    
            </div>
            <div className={footStyles.eachcoloumn}>
                <h3>Connect With Us</h3>
                <a href="">About Us</a>
                <a href="">About Us</a>
                <a href="">About Us</a>
               
                <Link href='/about'>About Us</Link>
                <Link href='/about'>About Us</Link>
                        
            </div>
            

        </div>
        <div className={footStyles.footer_down}>
            <span>Leapfrog Brands</span>
            <img src="https://www.lftechnology.com/wp-content/themes/Froggy/dist/images/eduphoric.svg" alt="eduphoric" />
           <img src="https://www.lftechnology.com/wp-content/themes/Froggy/dist/images/signetic-bw.svg" alt="image" />
           <img src="https://www.lftechnology.com/wp-content/themes/Froggy/dist/images/persimmon.svg" alt="" />
        </div>
        <div className={footStyles.copyright_section}>
            <div className={footStyles.copyright_left}>
            <p>Copyright 2022 Leapfrog Technology Inc. All rights reserved.</p>
            <Link href=" " > Privacy policy</Link> 
            <Link href=" ">Data Subject Policy</Link> 
            
            </div>
            <div className={footStyles.copyright_right}>
                <Image src="/leapfrog.png" height='50' width="80"/>
            </div>

        </div>
     </div>

  )
}

export default Footer