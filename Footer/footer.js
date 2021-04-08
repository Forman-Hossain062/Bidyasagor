import React from 'react'
import './footer.css'
import FooterLink from './FooterLink'
const Footer = () => {
    return (
        <div >
            <FooterLink />
            <div className="footer" style={{ position: 'fixed', }} style={{ backgroundColor: "#212529", textAlign: 'center', height: '70px', color: 'white' }}>
                <p style={{ padding: '20px' }}>Bidyasagor &#169; Copyright 2021 ; <span style={{ color: 'tomato' }}> Developed By: Forman & Tanvir ;</span> </p>
            </div>
        </div>
    )
}

export default Footer;