import React, { Component } from 'react'
import './btn.css'
import Data from '../../data/details'
import Context from '../../data/context2'
import D3 from '../../data/3DImage'
import Description from './description'
import Description2 from './Description2'
import ThreeD from './3DView'
import ImageSlider from '../../imgSlider/ImageSlider';
import { SliderData } from '../../imgSlider/SliderData';
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        data: Data,
        context: Context,
        d3: D3,
    }

    render() {
        const menu = this.state.data.map(item => {
            return <Description details={item} key={item.id} />
        })

        const content = this.state.context.map(item => {
            return <Description2 detail={item} key={item.id} />
        })
        const threeD = this.state.d3.map(item => {
            return <ThreeD three={item} key={item} />
        })
        return (
            <div>
                <div className='bgImg' style={{ backgroundColor: "#515E7B", zIndex: '2', marginBottom: "20px" }}>
                    <ImageSlider slides={SliderData} />
                </div>

                <div style={{ textAlign: 'center', marginBottom: "20px" }}>

                    <Link style={{ marginRight: "40px", textDecoration: "none", width: "", height: '' }} to='/hsc' className="button btn-lg" > HSC</Link>


                    <Link style={{ marginRight: "40px", textDecoration: "none", width: "", height: 'auto' }} to='/medx' className="button btn-lg" > MEDX</Link>
                </div>
                <div style={{ backgroundColor: "  white" }}>
                    <div  >
                        <hr className="container" />
                        {menu}
                    </div>
                </div>
                <div style={{ backgroundColor: "white" }}>
                    <div className="" >
                        <hr className="container" />
                        {content}
                    </div>
                </div>
                <div className="team" style={{ marginTop: "20px" }}>
                    <h4>3D View of Machine</h4>
                </div>
                <div style={{ backgroundColor: "" }}>
                    <div >

                        <hr className="container" /> {threeD}</div>

                </div>
            </div>
        )
    }
}
export default Home;


