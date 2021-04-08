import React from 'react'
import './About.css'
import { Card, CardBody, CardFooter, CardImg } from 'reactstrap'
const TeamHsc = props => {
    return (
        <div className="container " >
            <div className=' '>
                <Card style={{ backgroundColor: '#515E7B', color: 'white' }}>

                    <CardBody style={{ textAlign: "center" }}>
                        {/* <CardImg className='rounded-circle size' src={props.hsc.image} /> */}
                        <h3>{props.hsc.Name}</h3>

                        <h5>{props.hsc.instructor}</h5>
                        <h5>{props.hsc.instituation}</h5>
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

export default TeamHsc;
