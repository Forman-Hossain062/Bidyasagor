import React, { Component } from 'react'

import './Hsc.css'
import { CardColumns } from 'reactstrap'
import { SliderData } from '../../data/HscData'
import ImgSlider from '../HscPage/SliderHsc'
import Row1 from '../../data/HscPage/row1'
import Row2 from '../../data/HscPage/row2'
import FirstRow from './firstRow'
import SecondRow from './2ndRow'
import { Team } from '../../data/HscPage/TeamPro'
import TeamPro from './TeamProfile'
class Hsc extends Component {
    state = {
        row1: Row1,
        row2: Row2,
        team: Team,
    }
    render() {
        const menu = this.state.row1.map(item => {
            return <FirstRow row={item} key={item.id} />
        })

        const detail = this.state.row2.map(item => {
            return <SecondRow row={item} key={item.id} />
        })
        const team = this.state.team.map(item => {
            return <TeamPro member={item} />
        })

        return (
            <div>

                <div className='HscbgImg' style={{ backgroundColor: "#515E7B", marginBottom: "20px" }}>
                    <ImgSlider slides={SliderData} />
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

export default Hsc;