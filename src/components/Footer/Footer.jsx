import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=''/>
                    <p>some dummy sentence for now</p>
                    <div className='footer-social-icons'>
                       <img src={assets.facebook_icon} alt=''/> 
                        <img src={assets.linkedin_icon} alt=''/>
                        
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 0000000000</li>
                        <li>@OrderUp.com</li>
                    </ul>

                </div>
              

            </div>
            <hr />
            <p className="footer-copy-right">Copyright 2024 © OrderUp.com -All right Reserved. </p>
           
        </div>

    )
}

export default Footer
