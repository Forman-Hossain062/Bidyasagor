import React from 'react'
import './About.css'
import { Card, CardBody, CardFooter, CardImg } from 'reactstrap'
const TeamMedx = props => {
    return (
        <div className="container " >
            <div className=' '>
                <Card style={{ backgroundColor: '#515E7B', color: 'white' }}>
                    <CardBody style={{ textAlign: "center" }}>
                        <h3>{props.medx.Name}</h3>

                        <h5>{props.medx.instructor}</h5>
                        <h5>{props.medx.instituation}</h5>
                        <CardFooter

                            style={{ cursor: "pointer", backgroundColor: 'gray' }}
                            onClick={props.selectedDish}>

                            <h6> Click Here To See Detail View</h6>
                        </CardFooter>



                    </CardBody>
                </Card>
            </div>
        </div >
    )
}

export default TeamMedx;