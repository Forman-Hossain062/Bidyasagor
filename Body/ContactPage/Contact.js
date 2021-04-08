import React, { Component } from 'react'
import Logo from './logo.png'
import './contact.css'
class Contact extends Component {
    render() {
        return (
            <div className=' '>

                <div className='head container pb-5' style={{ paddingTop: "120px", backgroundColor: '#F8F9FA' }}>
                    <h2 >Questions, Comments? You tell us. We listen...</h2>
                    <h5>Email: bidyasagor2021@gmail.com</h5>

                    <br />
                    <h5>Call Us: +8801758105478</h5>
                    <h5>Office: tejgoan,Dhaka-1208</h5>
                    <h5>Everyday- 11am to 11pm</h5>
                </div >
                <hr />

                <div style={{ backgroundColor: '#D0EBFF' }}>
                    <div className='row head container pt-5 pb-5' style={{ margint: "auto" }} >
                        <div className='col ml-5'>
                            <h3>Social Media Links:</h3>
                            <br />
                            <h6>Facebook Page:</h6>
                            <br />
                            <h6>Facebook Group:</h6>
                            <br />
                            <h6>YouTube:</h6>
                        </div>
                        <div className='col'>
                            <h3>App Links:</h3>
                            <br />
                            <h6>Hsc App Link:</h6>
                            <br />
                            <h6>Medx App Link:</h6>
                            <br />
                        </div>
                        <div className='col'>
                            <h3>Bidyasagor</h3>
                            <br />
                            <a href="/contact">  <img src={Logo} alt='Logo' width="100px" height="120px" style={{ cursor: 'pointer' }} /></a>

                        </div>
                    </div>
                </div>



            </div>

        )

    }

}

export default Contact;