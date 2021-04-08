import React, { Component } from 'react'

import './Medx.css'
import { CardColumns } from 'reactstrap'
import { SliderData } from '../../data/MedxData'
import ImgSlider from '../MedxPage/SliderMedx'
import Row1 from '../../data/MedxPage/1stRow'
import Row2 from '../../data/MedxPage/2ndRow'
import Row1st from './1stRow'
import Row2nd from './2ndRow'
import { MedTeam } from '../../data/MedxPage/TeamPro'
import ProTeam from './TeamProfile'
class Medx extends Component {
    state = {
        row1: Row1,
        row2: Row2,
        team: MedTeam,
    }
    render() {
        const menu = this.state.row1.map(item => {
            return <Row1st row={item} key={item.id} />
        })

        const detail = this.state.row2.map(item => {
            return <Row2nd row={item} key={item.id} />
        })
        const team = this.state.team.map(item => {
            return <ProTeam member={item} />
        })

        return (
            <div>
                <div>


                    <div className='MedxbgImg' style={{ backgroundColor: "#515E7B", marginBottom: "20px" }}>
                        <ImgSlider slides={SliderData} />
                    </div>
                </div>

                <div style={{ backgroundColor: "" }}>
                    {menu}
                </div>
                <div style={{ backgroundColor: "" }}>
                    <div >
                        {detail}
                    </div>

                </div>


            </div >
        )

    }

}

export default Medx;