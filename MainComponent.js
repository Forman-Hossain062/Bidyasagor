import React from 'react'
import Header from './Header/header'

import Footer from './Footer/footer'

import MainBody from './Body/MainBody'
const MainComponent = () => {
    return (
        // <div style={{ backgroundColor: ' #0084ff' }}>
        <div style={{}}>

            <div style={{ margin: "0", padding: "0", boxSizing: 'border-box' }} >
                <Header />

                <MainBody />
                <Footer />
            </div>


        </div >
    )
}

export default MainComponent;
